import {FC, ReactNode} from "react";

export type SearchButtonProps = {
  children: ReactNode;
};

export const SearchButton: FC<SearchButtonProps> = ({ children }) => <button type="submit" className="rounded-full border border-blue-800 hover:bg-blue-50 p-1 h-[45px] aspect-square flex justify-center items-center cursor-pointer" >
  {children}
</button>;