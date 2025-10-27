import {PageLayout} from "@/lib/components/page-layout";
import {SearchPersonalisation} from "@/lib/components/search-personalisation";
import {SearchSummaryRag} from "@/lib/components/search-summary-rag";
import {SearchLinks} from "@/lib/components/search-links";
import {SearchIntro} from "@/lib/components/search-intro";
import 'react-loading-skeleton/dist/skeleton.css'

export default async function SearchPage() {
  return <PageLayout>
    <SearchIntro
      loading
    />

    <SearchPersonalisation
      content={""}
      loading
    />

    <SearchSummaryRag
      content={""}
      loading
    />

    <SearchLinks
      links={[]}
      loading
    />
  </PageLayout>;
}