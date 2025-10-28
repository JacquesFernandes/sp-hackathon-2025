import {BaseFacade} from "@/lib/facade/base";
import {SearchQuery} from "@/lib/types/search-query";
import {SearchResult} from "@/lib/types/search-result";
import {AiRequestData} from "@/lib/facade/ai-client/types/ai-request-data";
import {personas} from "@/lib/data/personas";

export class MockClientFacade implements BaseFacade {

  public async search(searchQuery: SearchQuery): Promise<SearchResult> {
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

    const possiblePersona = personas.find(({ name }) => name === userId);

    const personalisationContent = 'user_id' in aiRequestData && aiRequestData.user_id !== ''
      ? possiblePersona?.personalisationMessage
        ?? 'No personalised results available'
      : 'Please login to see personalised results';

    return {
      personalisationContent,
      links: possiblePersona?.links ?? [],
      summaryRagContent: possiblePersona?.summaryRag ?? 'Sorry, I am unable to assist you with this request',
    };
  }
}