import NextImage from "next/image";
import { FC } from "react";
import { Product } from "~/lib/shopify";
import { useHover } from "@uidotdev/usehooks";
import { EyeIcon, BagIcon } from "~/components/icons";
const MAP_CURREMCY = new Map([
  ["USD", "$"],
  ["PEN", "S/."],
]);

export const CardProduct: FC<{
  product: Product;
}> = ({ product }) => {
  const image = product.images?.[0];
  const [ref, hovering] = useHover();
  const rawPrice = product.variants[0].price;
  const priceToCompare = product.variants[0].compareAtPrice;

  const resolvePrice = (price: number) => {
    return `${MAP_CURREMCY.get(rawPrice.currencyCode)}${price}`;
  };

  return (
    <div
      ref={ref as any}
      className="p-3 cursor-pointer flex flex-col border-2 border-black max-w-max items-center border-none relative"
    >
      {hovering && (
        <div className="flex flex-col gap-y-2 absolute right-0  bottom-16">
          <div className="wrap-icon">
            <EyeIcon />
          </div>
          <div className="wrap-icon">
            <BagIcon />
          </div>
        </div>
      )}
      <div>
        {image && (
          <NextImage
            alt={image.altText ?? ""}
            src={image.src}
            width={370}
            height={400}
          />
        )}
      </div>
      <p className="font-dmSans text-black font-normal">{product.title}</p>
      <div className="flex space-x-2 text-lg">
        <p>{resolvePrice(rawPrice.amount)}</p>{" "}
        {priceToCompare && <b>{resolvePrice(priceToCompare.amount)}</b>}
      </div>
    </div>
  );
};
