import {FC} from "react";

type SearchInputProps = {
  defaultValue?: string;
};

export const SearchInput: FC<SearchInputProps> = ({ defaultValue }) => <input
  type="text"
  name="search"
  placeholder="Ask Lucille..."
  className="w-full outline-1 outline-blue-800 bg-transparent focus:bg-blue-100 transition-colors duration-100 rounded-full p-2 px-4 text-xl"
  defaultValue={defaultValue}
/>;