import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

import { getPages } from "@/sanity/sanity-utils";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Awesome Site",
  description: "Generated by Next.js & Sanity",
};

export const revalidate = 10;

export async function generateStaticParams() {
  const pages = await getPages();
  return pages;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-20`}>
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold"
          >
            Oleh
          </Link>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="hover:underline"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
