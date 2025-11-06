import {BaseFacade} from "@/lib/facade/base";
import {SearchQuery} from "@/lib/types/search-query";
import {SearchResult} from "@/lib/types/search-result";
import {personas} from "@/lib/data/personas";

const RESPONSE_DELAY_MS = 3000;

export class MockClientFacade implements BaseFacade {

  public async search(searchQuery: SearchQuery): Promise<SearchResult> {
    const { userId } = searchQuery;

    const possiblePersona = personas.find(({ name }) => name === userId);

    const personalisationContent = possiblePersona !== undefined
      ? possiblePersona?.personalisationMessage
        ?? 'No personalised results available'
      : 'Please login to see personalised results';

    void await new Promise((res) => setTimeout(res, RESPONSE_DELAY_MS));

    return {
      personalisationContent,
      links: possiblePersona?.links ?? [],
      summaryRagContent: possiblePersona?.summaryRag ?? 'Sorry, I am unable to assist you with this request',
    };
  }
}