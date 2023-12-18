import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "@/sanity/schemas";

const config = defineConfig({
  projectId: "jfmbqv1m", //env
  dataset: "production", //env
  apiVersion: "2023-12-16", //env

  title: "Next Sanity Test-01",
  basePath: "/admin",

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
