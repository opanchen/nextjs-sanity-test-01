import Link from "next/link";
import Image from "next/image";

// import { useNextSanityImage } from "next-sanity-image";
// import imageUrlBuilder from "@sanity/image-url";

// import {NextSanityImage} from 'next-sanity-image'

import { getProjects } from "@/sanity/sanity-utils";
import { createClient } from "next-sanity";
import config from "@/sanity/config/client-config";

export const revalidate = 10;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects;
}

type ImgProps = {
  path: string;
  alt: string;
};

// const builder = imageUrlBuilder(createClient(config));

// function urlFor(source) {
//   return builder.image(source);
// }

// export const Img: React.FC<ImgProps> = ({ path, alt }) => {
//   const imageProps = useNextSanityImage(createClient(config), path);

//   return (
//     <Image
//       {...imageProps}
//       style={{ width: "100%", height: "auto" }}
//       alt={alt}
//       className="object-cover rounded-lg border border-gray-500"
//     />
//   );
// };

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Oleh
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects!
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          // const imageProps = useNextSanityImage(
          //   createClient(config),
          //   project.image
          // );

          return (
            <Link
              href={`/projects/${project.slug}`}
              key={project._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-100 transition"
            >
              {project.image && (
                <Image
                  src={project.image}
                  // src={builder
                  //   .image(project.image)
                  //   .width(800)
                  //   .height(600)
                  //   .url()}
                  alt={project.name}
                  width={750}
                  height={300}
                  priority={true}
                  className="object-cover aspect-[4/3] rounded-lg border border-gray-500"
                />

                // <Img path={project.image} alt={project.name} />
              )}

              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
