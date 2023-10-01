"use client";
import { Builder } from "@builder.io/react";
import { BuilderInputType } from "./utils";
import dinamyc from "next/dynamic";

Builder.registerComponent(
  dinamyc(() => import("./components/products/GridProducts")),
  {
    name: "productsGalery",
    inputs: [
      {
        name: "title",
        type: BuilderInputType.TEXT,
        defaultValue: "Todos nuestros cafés cuentan su propia historia",
      },
      {
        name: "smallTitle",
        type: BuilderInputType.TEXT,
        defaultValue: "Nuestra selección de cafés de alta calidad",
      },
    ],
  }
);
