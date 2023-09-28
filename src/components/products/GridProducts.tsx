"use client";
import { Product } from "~/lib/shopify";
import { productsAtom } from "~/lib/shopify/atoms";
import { FC } from "react";
import { useHydrateAtoms } from "jotai/utils";
import { CardProduct } from "./ProductHomeCard";
import { useAtomValue } from "jotai";

type GridProductsProps = {
  products: Product[];
};

export const GridProducts: FC<GridProductsProps> = ({
  products: productsFromServer,
}) => {
  useHydrateAtoms([[productsAtom, productsFromServer]]);

  const products = useAtomValue(productsAtom);

  return (
    <div className="text-black py-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-xl">Nuestra selección de cafés de alta calidad</h2>
        <h3 className="text-5xl font-semibold">
          Todos nuestros cafés cuentan su propia historia
        </h3>
      </div>
      <div className="grid mt-5 place-content-center grid-cols-3 max-w-7xl m-auto">
        {products.map((pr) => (
          <CardProduct product={pr} />
        ))}
      </div>
    </div>
  );
};
