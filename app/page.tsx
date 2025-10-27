import {ArrowRight} from "lucide-react";
import {PageLayout} from "@/lib/components/page-layout";
import {getDataFromServerSearchProps} from "@/lib/get-data-from-server-search-props";
import {ServerSearchProps} from "@/lib/types/server-search-props";
import {SearchInput} from "@/lib/components/search-input";
import {SearchButton} from "@/lib/components/search-button";

type HomeProps = ServerSearchProps;

export default async function Home(props: HomeProps) {
  const { query, persona } = await getDataFromServerSearchProps(props);

  return <PageLayout showPicker >
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2" >
      <h2 className="w-full text-3xl text-gray-800" >How can we help?</h2>

      <form className="w-full" method="GET" action="/search" >
        <div className="w-full flex flex-row gap-2" >
          <SearchInput defaultValue={query} />
          <input type="hidden" name="persona" value={persona} />
          <SearchButton>
            <ArrowRight />
          </SearchButton>
        </div>
      </form>
    </div>
  </PageLayout>;
}
