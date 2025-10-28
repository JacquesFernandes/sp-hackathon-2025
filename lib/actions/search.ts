'use server';

import {SearchLink} from "@/lib/types/search-link";
import {personas} from "@/lib/data/personas";
import {redirect} from "next/navigation";

type AiRequestData = {
  search_topic: string;
  user_id?: string;
};

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
  if (process.env.INVOCATION_ENDPOINT === undefined) {
    throw new Error('INVOCATION_ENDPOINT environment variable must be defined.');
  }

  if (query.query === undefined || query.query.trim() === '') {
    return redirect('/');
  }

  const aiRequestData: AiRequestData = {
    search_topic: query.query.trim(),
  };

  if (query.userId?.trim() !== '') {
    aiRequestData.user_id = query.userId;
  }

  const response = await fetch(process.env.INVOCATION_ENDPOINT, { method: 'POST', body: JSON.stringify(aiRequestData) });
  const json = await response.json();

  if (typeof json !== 'object' || typeof json.personalised !== 'string' || typeof json.summary !== 'string' || !Array.isArray(json.links)) {
    throw new Error('Something wrong with response: ' + JSON.stringify(json));
  }

  return {
    personalisationContent: json.personalised,
    summaryRagContent: json.summary,
    links: json.links,
  };
}