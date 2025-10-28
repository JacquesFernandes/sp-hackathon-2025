import {ServerSearchProps} from "@/lib/types/server-search-props";

type SearchParamData = {
  persona: string;
  query: string;
}

export const getDataFromServerSearchProps = async ({ searchParams }: ServerSearchProps): Promise<SearchParamData> => {
  const awaitedSearchParams = await searchParams;

  const possiblePersona = awaitedSearchParams?.['persona'];
  const persona = possiblePersona === undefined
    ? ''
    : Array.isArray(possiblePersona)
      ? possiblePersona[0]
      : possiblePersona;

  const possibleSearch = awaitedSearchParams?.['search'];
  const search = possibleSearch === undefined
    ? ''
    : Array.isArray(possibleSearch)
      ? possibleSearch[0]
      : possibleSearch;

  return {
    persona,
    query: search,
  };
};