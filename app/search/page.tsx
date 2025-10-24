import {PageLayout} from "@/lib/components/page-layout";
import {Search} from "lucide-react";
import {getDataFromServerSearchProps} from "@/lib/get-data-from-server-search-props";
import {ServerSearchProps} from "@/lib/types/server-search-props";
import {SearchInput} from "@/lib/components/search-input";
import {SearchButton} from "@/lib/components/search-button";

type SearchPageProps = ServerSearchProps;

export default async function SearchPage(props: SearchPageProps) {
  const { search, persona } = await getDataFromServerSearchProps(props);

  return <PageLayout>
    <form className="w-full" method="GET" action="/search" >
      <div className="w-full flex flex-row gap-2" >
        <SearchInput defaultValue={search} />
        <input type="hidden" name="persona" value={persona} />
        <SearchButton>
          <Search />
        </SearchButton>
      </div>
    </form>
  </PageLayout>;
}