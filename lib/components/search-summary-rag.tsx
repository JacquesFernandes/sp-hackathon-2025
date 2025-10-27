import {FC} from "react";
import {Sparkles} from "lucide-react";
import Skeleton from "react-loading-skeleton";

export type SearchSummaryRagProps = {
  content: string;
  loading?: boolean;
};

export const SearchSummaryRag: FC<SearchSummaryRagProps> = ({ content, loading }) => {

  return <section id="search-summary-rag" className="border-2 border-orange-300 rounded-3xl bg-orange-50 p-3 mt-3 ">
    <div className="w-full flex flex-row gap-2 justify-start items-center text-orange-600" >
      <Sparkles />
      <h2>Some insights</h2>
    </div>

    <div className="mt-1 text-orange-800 flex flex-col gap-1" >
      {
        loading ? <Skeleton count={5} /> : <p>{ content }</p>
      }
    </div>
  </section>;
}