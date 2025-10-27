import {FC, ReactNode, Suspense} from "react";
import Image from "next/image";
import {UserPicker} from "@/lib/components/user-picker";
import Link from "next/link";

export type PageLayoutProps = {
  children: ReactNode;
  showPicker?: boolean;
};

export const PageLayout: FC<PageLayoutProps> = ({ showPicker, children }) => {
  return <>
    <header className="flex flex-col @md/root:flex-row items-center" >
      <Link href="/" >
        <Image src="/sp.svg" width={235} height={40} alt="ScottishPower logo" className="m-2" />
      </Link>
      {
        showPicker
          ? (
            <Suspense>
              <UserPicker />
            </Suspense>
          )
          : null
      }
    </header>
    <main className="min-h-screen mx-auto max-w-[70ch]" >
      {children}
    </main>
  </>;
}