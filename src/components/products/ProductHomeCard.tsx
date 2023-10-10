import NextImage from "next/image";
import { FC } from "react";
import { Product } from "~/libs/shopify";
import { addVariantToCartAtom } from "~/libs/shopify/atoms";
import { useHover } from "@uidotdev/usehooks";
import { EyeIcon, BagIcon } from "~/components/icons";
import { useAtom } from "jotai";
import { MAP_CURREMCY } from "../../constants";

export const CardProduct: FC<{
  product: Product;
}> = ({ product }) => {
  const image = product.images?.[0];
  const [ref, hovering] = useHover();
  const variant = product.variants[0];
  const rawPrice = variant.price;
  const priceToCompare = variant.compareAtPrice;

  const [, addToCart] = useAtom(addVariantToCartAtom);

  const resolvePrice = (price: number) => {
    return `${MAP_CURREMCY.get(rawPrice.currencyCode)}${price}`;
  };

  return (
    <div
      ref={ref as any}
      className="p-3 cursor-pointer flex mx-auto flex-col border-2 border-black max-w-max items-center border-none relative"
    >
      {hovering && (
        <div className="flex flex-col gap-y-2 absolute right-0  bottom-16">
          <div className="wrap-icon">
            <EyeIcon />
          </div>
          <button
            className="wrap-icon"
            onClick={() => {
              addToCart({
                quantity: 1,
                variantId: variant.id,
              });
            }}
          >
            <BagIcon />
          </button>
        </div>
      )}
      <div className="mobile:w-60 ">
        {image && (
          <NextImage
            alt={image.altText ?? ""}
            src={image.src}
            width={370}
            height={400}
          />
        )}
      </div>
      <p className="font-dmSans text-black font-normal toTable:text-sm">
        {product.title}
      </p>
      <div className="flex space-x-2 text-lg">
        <p>{resolvePrice(rawPrice.amount)}</p>{" "}
        {priceToCompare && <b>{resolvePrice(priceToCompare.amount)}</b>}
      </div>
    </div>
  );
};
