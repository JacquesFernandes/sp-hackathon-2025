import {FC} from "react";
import {UserRoundIcon} from 'lucide-react';

export type SearchPersonalisationProps = {
  content: string;
};

export const SearchPersonalisation: FC<SearchPersonalisationProps> = ({ content }) => {
  return <section id="search-personalisation" className="border-2 border-green-300 rounded-3xl bg-green-50 p-3 mt-3 " >
    <div className="w-full flex flex-row gap-2 justify-start items-center text-green-600" >
      <UserRoundIcon />

      <h2>About you</h2>
    </div>

    <div className="mt-1 text-green-800 flex flex-col gap-1" >
      <p>{content}</p>
    </div>
  </section>
}