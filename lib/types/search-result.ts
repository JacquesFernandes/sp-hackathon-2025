import {SearchLink} from "@/lib/types/search-link";

export type SearchResult = {
  personalisationContent?: string;
  summaryRagContent: string;
  links: SearchLink[];
}