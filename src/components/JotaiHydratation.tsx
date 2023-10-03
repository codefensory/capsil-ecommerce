"use client";
import { useHydrateAtoms } from "jotai/utils";
import { FC } from "react";
import { Product, productsAtom } from "~/libs/shopify";

type Props = {
  productsFromServer: Product[];
};

export const JotaiHydratation: FC<Props> = ({ productsFromServer }) => {
  useHydrateAtoms([[productsAtom, productsFromServer]]);
  return null;
};
