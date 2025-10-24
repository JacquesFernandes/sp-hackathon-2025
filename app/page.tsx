import {ArrowRight} from "lucide-react";
import {PageLayout} from "@/lib/components/page-layout";

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const awaitedSearchParams = await searchParams;

  const possiblePersona = awaitedSearchParams['persona'];
  const persona = possiblePersona === undefined
    ? 'anonymous'
    : Array.isArray(possiblePersona)
      ? possiblePersona[0]
      : possiblePersona;

  const possibleSearch = awaitedSearchParams['search'];
  const search = possibleSearch === undefined
    ? ''
    : Array.isArray(possibleSearch)
      ? possibleSearch[0]
      : possibleSearch;

  return <PageLayout showPicker >
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-2" >
      <h2 className="w-full text-3xl text-gray-800" >How can we help?</h2>

      <form className="w-full" method="GET" action="/search" >
        <div className="w-full flex flex-row gap-2" >
          <input
            type="text"
            name="search"
            placeholder="Search for keywords, e.g. ‘Smart meters’"
            className="w-full outline-1 outline-blue-800 bg-blue-50 focus:bg-blue-100 rounded-full p-2 px-4 text-xl"
            defaultValue={search}
          />
          <input type="hidden" name="persona" value={persona} />
          <button type="submit" className="rounded-full border border-blue-800 bg-blue-50 hover:bg-blue-100 p-1 h-[45px] aspect-square flex justify-center items-center cursor-pointer" >
            <ArrowRight />
          </button>
        </div>
      </form>
    </div>
  </PageLayout>;
}
