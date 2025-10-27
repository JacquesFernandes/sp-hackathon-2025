'use server';

import {SearchLink} from "@/lib/types/search-link";

type SearchResult = {
  personalisationContent: string;
  summaryRagContent: string;
  links: SearchLink[];
}

export async function search(): Promise<SearchResult> {
  const searchPersonalisationContent = "Proin at augue vel odio interdum lobortis at at sapien. Nam a gravida leo, eget pretium urna. Nunc auctor auctor metus quis accumsan. Quisque quis facilisis risus. Suspendisse lobortis tincidunt fermentum. Aenean id neque vel dui imperdiet mollis congue at diam. Sed at aliquet sem.";

  const searchSummaryRagContent = "Proin at augue vel odio interdum lobortis at at sapien. Nam a gravida leo, eget pretium urna. Nunc auctor auctor metus quis accumsan. Quisque quis facilisis risus. Suspendisse lobortis tincidunt fermentum. Aenean id neque vel dui imperdiet mollis congue at diam. Sed at aliquet sem.";

  const links: SearchLink[] = [
    {
      label: "ScottishPower",
      url: "https://www.scottishpower.co.uk/search",
    },
    {
      label: "Google",
      url: "https://www.google.com/search",
    }
  ];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    personalisationContent: searchPersonalisationContent,
    summaryRagContent: searchSummaryRagContent,
    links: links,
  };
}