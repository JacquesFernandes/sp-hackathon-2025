import {FC} from "react";
import {ExternalLink, Link} from "lucide-react";
import {SearchLink} from "@/lib/types/search-link";

export type SearchLinksProps = {
  links: SearchLink[];
};

export const SearchLinks: FC<SearchLinksProps> = ({ links }) => {

  return <section id="search-summary-rag" className="p-3 mt-3">
    <div className="w-full flex flex-row gap-2 justify-start items-center" >
      <Link />
      <h2>My sources:</h2>
    </div>

    <div className="mt-1 flex flex-col gap-1" >
      <ul className="list-inside text-blue-500 *:active:text-blue-800 cursor-pointer" >
        {
          links.map(({ label, url }) => <li key={label} >
            <a className="flex flex-row items-center gap-1" href={url} ><span>{label}</span> <ExternalLink size="18" /></a>
          </li>)
        }
      </ul>
    </div>
  </section>;
}