import {ArrowRight} from "lucide-react";

export default function Home() {
  return <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2" >
    <h2 className="w-full text-3xl text-gray-950" >How can we help?</h2>

    <form className="w-full flex flex-row gap-2" >
      <input
        type="text"
        name="search"
        placeholder="Search for keywords, e.g. ‘Smart meters’"
        className="w-full outline-1 outline-blue-800 bg-blue-50 focus:bg-blue-100 rounded-full p-2 px-4 text-xl"
      />
      <button type="submit" className="rounded-full border border-blue-800 bg-blue-50 hover:bg-blue-100 p-1 h-[45px] aspect-square flex justify-center items-center cursor-pointer" >
        <ArrowRight />
      </button>
    </form>
  </div>;
}
