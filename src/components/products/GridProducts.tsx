"use client";
import { useAtomValue } from "jotai";
import { FC } from "react";
import { productsAtom } from "~/libs/shopify/atoms";
import { CardProduct } from "./ProductHomeCard";

type Props = {
  title: string;
  smallTitle: string;
};

export const GridProducts: FC<Props> = ({ title, smallTitle }) => {
  const products = useAtomValue(productsAtom);
  return (
    <div className="text-black py-8 toTable:py-5 max-w-7xl mx-auto mobile:px-3">
      <div className="text-center">
        <h3 className="text-xl tablet:text-lg mobile:text-lg">{smallTitle}</h3>
        <h2 className="text-5xl font-semibold tablet:text-4xl mobile:text-2xl">
          {title}
        </h2>
      </div>
      <div className="grid mt-5 grid-cols-3 max-w-7xl m-auto mobile:grid-cols-1">
        {products.map((pr) => (
          <CardProduct product={pr} key={pr.id} />
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
