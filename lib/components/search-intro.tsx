import {FC} from "react";

export type SearchIntroProps = {
  loading?: boolean;
};

export const SearchIntro: FC<SearchIntroProps> = ({ loading }) => {
  return <section id="search-intro" className="mt-3 ml-2">
    <p className="text-lg" >
      {
        loading
          ? "Hold on, just doing some snooping around..."
          : "Lucille Watt here, this is what I've gathered..."
      }
    </p>
  </section>;
}