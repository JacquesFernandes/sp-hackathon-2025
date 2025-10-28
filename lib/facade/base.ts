import {SearchQuery} from "@/lib/types/search-query";
import {SearchResult} from "@/lib/types/search-result";

export type BaseFacade = {
  search: (searchQuery: SearchQuery) => Promise<SearchResult>;
};