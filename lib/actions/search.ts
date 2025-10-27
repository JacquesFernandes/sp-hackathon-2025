'use server';

import {SearchLink} from "@/lib/types/search-link";
import {personas} from "@/lib/data/personas";

type SearchQuery = {
  userId?: string;
  query?: string;
}

type SearchResult = {
  personalisationContent?: string;
  summaryRagContent: string;
  links: SearchLink[];
}

export async function search(query: SearchQuery): Promise<SearchResult> {
  const persona = personas.find((persona) => persona.name === query.userId);

  const searchPersonalisationContent = persona?.personalisationMessage;

  const searchSummaryRagContent = persona?.summaryRag ?? '';

  const links: SearchLink[] = persona?.links ?? [];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    personalisationContent: searchPersonalisationContent,
    summaryRagContent: searchSummaryRagContent,
    links: links,
  };
}