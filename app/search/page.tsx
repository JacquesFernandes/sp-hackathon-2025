import {PageLayout} from "@/lib/components/page-layout";
import {Search} from "lucide-react";
import {getDataFromServerSearchProps} from "@/lib/get-data-from-server-search-props";
import {ServerSearchProps} from "@/lib/types/server-search-props";
import {SearchInput} from "@/lib/components/search-input";
import {SearchButton} from "@/lib/components/search-button";
import {SearchPersonalisation} from "@/lib/components/search-personalisation";
import {SearchSummaryRag} from "@/lib/components/search-summary-rag";
import {SearchLinks} from "@/lib/components/search-links";
import {SearchLink} from "@/lib/types/search-link";
import {SearchIntro} from "@/lib/components/search-intro";

type SearchPageProps = ServerSearchProps;

export default async function SearchPage(props: SearchPageProps) {
  const { search, persona } = await getDataFromServerSearchProps(props);

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

  return <PageLayout>
    <form className="w-full flex flex-row gap-2" method="GET" action="/search"  >
      <SearchInput defaultValue={search} />
      <input type="hidden" name="persona" value={persona} />
      <SearchButton>
        <Search />
      </SearchButton>
    </form>

    <SearchIntro />

    <SearchPersonalisation content={searchPersonalisationContent} />

    <SearchSummaryRag content={searchSummaryRagContent} />

    <SearchLinks links={links} />
  </PageLayout>;
}