'use server';

import {redirect} from "next/navigation";
import {SearchQuery} from "@/lib/types/search-query";
import {SearchResult} from "@/lib/types/search-result";
import {buildFacade} from "@/lib/facade/builder";

export async function search(query: SearchQuery): Promise<SearchResult> {
  if (process.env.APP_ENV !== 'test' && process.env.INVOCATION_ENDPOINT === undefined) {
    throw new Error('INVOCATION_ENDPOINT environment variable must be defined.');
  }

  if (query.query === undefined || query.query.trim() === '') {
    return redirect('/');
  }

  const facade = buildFacade();

  return facade.search(query);
}