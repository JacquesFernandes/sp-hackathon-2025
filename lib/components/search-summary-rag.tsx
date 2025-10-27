import {FC} from "react";
import {Sparkles} from "lucide-react";

export type SearchSummaryRagProps = {};

export const SearchSummaryRag: FC<SearchSummaryRagProps> = ({}) => {

  return <section id="search-summary-rag" className="border-2 border-orange-300 rounded-3xl bg-orange-50 p-3 mt-3 ">
    <div className="w-full flex flex-row gap-2 justify-start items-center text-orange-600" >
      <Sparkles />
      <h2>Lucille Watt</h2>
    </div>

    <div className="mt-1 text-orange-800 flex flex-col gap-1" >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl dapibus, imperdiet leo nec, ultricies mi. Etiam ultrices diam urna, a semper nunc pellentesque sed. Cras mollis euismod congue. Suspendisse in hendrerit erat, et commodo leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur aliquet cursus mattis. Quisque erat lectus, pretium venenatis lectus nec, rutrum consectetur magna. Quisque in egestas magna, quis dignissim neque. Etiam viverra in lorem in commodo. Pellentesque eu ultricies diam, non rutrum justo. Pellentesque ac nunc vel eros convallis eleifend. Cras a sem mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis in massa interdum, semper risus ut, sollicitudin est. Sed odio sapien, blandit vitae mi at, auctor rhoncus est. Nulla in ante vitae tellus imperdiet aliquam ac ac purus.</p>
    </div>
  </section>;
}