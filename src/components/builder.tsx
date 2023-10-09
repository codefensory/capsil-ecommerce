"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { Builder, BuilderContent, builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "");

interface BuilderPageProps {
  content?: BuilderContent;
}

export function RenderBuilderContent({ content }: BuilderPageProps) {
  const isPreviewing = useIsPreviewing();

  if (content || isPreviewing) {
    return <BuilderComponent content={content} model="page" />;
  }

  return <DefaultErrorPage statusCode={404} />;
}
