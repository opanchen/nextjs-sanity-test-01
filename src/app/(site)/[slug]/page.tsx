import { getPage } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <p className="my-[0.67em] mx-0 text-[2em] font-bold">{children}</p>
    ),
    h2: ({ children }) => (
      <p className="my-[0.83em] mx-0 text-[1.5em] font-bold">{children}</p>
    ),
    h3: ({ children }) => (
      <p className="my-[1em] mx-0 text-[1.17em] font-bold">{children}</p>
    ),
    h4: ({ children }) => (
      <p className="my-[1.33em] mx-0 text-[1em] font-bold">{children}</p>
    ),
    h5: ({ children }) => (
      <p className="my-[0.67em] mx-0 text-[0.83em] font-bold">{children}</p>
    ),
    h6: ({ children }) => (
      <p className="my-[2.33em] mx-0 text-[0.67em] font-bold">{children}</p>
    ),
  },
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>

      <div className="text-ld text-gray-700 mt-10 prose prose-red prose-h1:text-cyan-600">
        <PortableText value={page.content} components={components} />
      </div>
    </div>
  );
}
