"use client";
import { useHydrateAtoms } from "jotai/utils";
import { FC } from "react";
import { Product, productsAtom } from "~/lib/shopify";

type Props = {
  productsFromServer: Product[];
};

export const JotaiHydratation: FC<Props> = ({ productsFromServer }) => {
  useHydrateAtoms([[productsAtom, productsFromServer]]);
  return null;
};
