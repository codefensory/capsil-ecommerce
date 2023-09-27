"use client";
import { Product } from "~/lib/shopify";
import { productsAtom } from "~/lib/shopify/atoms";
import { FC } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { CardProduct } from "./ProductHomeCard";
type GridProductsProps = {
  products: Product[];
};
export const GridProducts: FC<GridProductsProps> = ({ products }) => {
  useHydrateAtoms([[productsAtom, products]]);

  return (
    <div className="grid grid-cols-3 max-w-7xl m-auto">
      {products.map((pr) => (
        <CardProduct product={pr} />
      ))}
    </div>
  );
};
