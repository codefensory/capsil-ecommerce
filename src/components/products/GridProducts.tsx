"use client";
import { useAtomValue } from "jotai";
import { FC } from "react";
import { productsAtom } from "~/lib/shopify/atoms";
import { CardProduct } from "./ProductHomeCard";

type Props = {
  title: string;
  smallTitle: string;
};

export const GridProducts: FC<Props> = ({ title, smallTitle }) => {
  const products = useAtomValue(productsAtom);
  return (
    <div className="text-black py-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h3 className="text-xl">{smallTitle}</h3>
        <h2 className="text-5xl font-semibold">{title}</h2>
      </div>
      <div className="grid mt-5  grid-cols-3 max-w-7xl m-auto">
        {products.map((pr) => (
          <CardProduct product={pr} />
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
