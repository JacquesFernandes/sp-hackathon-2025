import {FC} from "react";
import {Sparkles} from "lucide-react";

export type SearchSummaryRagProps = {
  content: string;
};

export const SearchSummaryRag: FC<SearchSummaryRagProps> = ({ content }) => {

  return <section id="search-summary-rag" className="border-2 border-orange-300 rounded-3xl bg-orange-50 p-3 mt-3 ">
    <div className="w-full flex flex-row gap-2 justify-start items-center text-orange-600" >
      <Sparkles />
      <h2>Lucille Watt</h2>
    </div>

    <div className="mt-1 text-orange-800 flex flex-col gap-1" >
      <p>{ content }</p>
    </div>
  </section>;
}