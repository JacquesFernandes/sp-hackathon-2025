import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {ReactNode, Suspense} from "react";
import Image from "next/image";
import {UserPicker} from "@/lib/components/user-picker";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "ScottishPower | Case of Search",
  description: "Uncover the right answers, unravel the clues, and drive away with confidence—no mystery left unsolved!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`@container/root ${roboto.variable} antialiased p-2`}
      >
        <header className="sticky top-0 flex flex-col @sm/root:flex-row items-center" >
          <Image src="/sp.svg" width={235} height={40} alt="ScottishPower logo" className="m-2" />
          <Suspense>
            <UserPicker />
          </Suspense>
        </header>
        <main className="min-h-screen mx-auto max-w-[70ch]" >
          {children}
        </main>
      </body>
    </html>
  );
}
