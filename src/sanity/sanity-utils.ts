import { createClient, groq } from "next-sanity";

import clientConfig from "./config/client-config";

import { Project } from "@/types/Project";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  const res = createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createedAt,
      title,
      "slug": slug.current    
    }`
  );
  return res;
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createedAt,
      title,
      "slug": slug.current,
      content,    
    }`,
    { slug }
  );
}
