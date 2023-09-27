import NextImage from "next/image";
import { FC } from "react";
import { Product } from "~/lib/shopify";

export const CardProduct: FC<{
  product: Product;
}> = ({ product }) => {
  const image = product.images?.[0];
  return (
    <div className="p-3 flex flex-col max-w-fit items-center w-64 bg-white shadow-lg  rounded-md">
      <p className="font-semibold text-black">{product.title}</p>
      <div>
        {image && (
          <NextImage
            alt={image.altText ?? ""}
            src={image.src}
            width={120}
            height={120}
          />
        )}
      </div>
    </div>
  );
};
