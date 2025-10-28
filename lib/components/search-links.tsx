import {FC} from "react";
import {ExternalLink, Link} from "lucide-react";
import {SearchLink} from "@/lib/types/search-link";
import Skeleton from "react-loading-skeleton";

export type SearchLinksProps = {
  links: SearchLink[];
  loading?: boolean;
};

export const SearchLinks: FC<SearchLinksProps> = ({ links, loading }) => {

  return <section id="search-summary-rag" className="p-3 mt-3">
    <div className="w-full flex flex-row gap-2 justify-start items-center" >
      <Link />
      <h2>My sources:</h2>
    </div>

    <div className="mt-1 flex flex-col gap-1" >
      {
        loading
          ? <Skeleton count={3} />
          : <>
            <ul className="list-inside text-blue-500 *:active:text-blue-800 cursor-pointer" >
              {
                links.map((url) => <li key={url} >
                  <a className="flex flex-row items-center gap-1" href={url} target="_blank" ><span>{url}</span> <ExternalLink size="18" /></a>
                </li>)
              }
            </ul>
          </>
      }
    </div>
  </section>;
}