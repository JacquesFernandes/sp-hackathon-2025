import {BaseFacade} from "@/lib/facade/base";
import {SearchQuery} from "@/lib/types/search-query";
import {SearchResult} from "@/lib/types/search-result";
import {personaUserIds} from "@/lib/data/persona-user-ids";
import {AiRequestData} from "@/lib/facade/ai-client/types/ai-request-data";
import {AiResponseData} from "@/lib/facade/ai-client/types/ai-response-data";

export class AiClientFacade implements BaseFacade {
  private readonly baseUrl: string;

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private isGoodResponse(data: any): data is AiResponseData {
    if (typeof data !== 'object') {
      return false;
    }

    if (!('personalised' in data)) {
      return false;
    }

    if (!('summary' in data)) {
      return false;
    }

    if (!('links' in data) || !Array.isArray(data.links)) {
      return false;
    }

    return true;
  }

  public async search(searchQuery: SearchQuery): Promise<SearchResult>  {
    const { userId, query } = searchQuery;

    if (query === undefined || query.trim() === '') {
      throw new Error('No query provided');
    }

    const aiRequestData: AiRequestData = {
      search_topic: query.trim(),
    };

    if (userId?.trim() !== '') {
      aiRequestData.user_id = userId;
    }

    const response = await fetch(`${this.baseUrl}/invocations`, { method: 'POST', body: JSON.stringify(aiRequestData) });
    const json = await response.json();

    if (!this.isGoodResponse(json)) {
      throw new Error('Something wrong with response: ' + JSON.stringify(json));
    }

    const { personalised, links, summary } = json;

    const personalisationContent = personaUserIds.includes(userId ?? '')
      ? personalised.trim() !== ''
        ? personalised.trim()
        : 'No personalised results available'
      : 'Please login to see personalised results';

    return {
      personalisationContent,
      summaryRagContent: summary,
      links: links,
    };
  }
}