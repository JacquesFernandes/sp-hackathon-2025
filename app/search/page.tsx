import {PageLayout} from "@/lib/components/page-layout";
import {Search} from "lucide-react";
import {getDataFromServerSearchProps} from "@/lib/get-data-from-server-search-props";
import {ServerSearchProps} from "@/lib/types/server-search-props";
import {SearchInput} from "@/lib/components/search-input";
import {SearchButton} from "@/lib/components/search-button";
import {SearchPersonalisation} from "@/lib/components/search-personalisation";
import {SearchSummaryRag} from "@/lib/components/search-summary-rag";
import {SearchLinks} from "@/lib/components/search-links";
import {SearchIntro} from "@/lib/components/search-intro";
import 'react-loading-skeleton/dist/skeleton.css'
import {search} from "@/lib/actions/search";

type SearchPageProps = ServerSearchProps;

export default async function SearchPage(props: SearchPageProps) {
  const { query, persona } = await getDataFromServerSearchProps(props);

  const { personalisationContent, summaryRagContent, links } = await search({ userId: persona, query, });

  return <PageLayout>
    <form className="w-full flex flex-row gap-2" method="GET" action="/search"  >
      <SearchInput defaultValue={query} />
      <input type="hidden" name="persona" value={persona} />
      <SearchButton>
        <Search />
      </SearchButton>
    </form>

    <SearchIntro />

    {personalisationContent && <SearchPersonalisation content={personalisationContent}/>}

    <SearchSummaryRag
      content={summaryRagContent}
    />

    <SearchLinks
      links={links}
    />
  </PageLayout>;
}