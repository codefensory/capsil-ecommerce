"use client";
import { useCartStateAtom } from "./atoms";
import NextImage from "next/image";
import { Minus, Plus, Dots, Close } from "~/components/icons";
import { Button } from "~/components/button";
import csx from "classnames";
import { checkoutAtom } from "~/libs/shopify";
import { useAtomValue } from "jotai";
import { MAP_CURREMCY } from "../../constants";
import { FC, ReactNode } from "react";

const UnitsInput = () => {
  return (
    <div className="flex border-2  h-8 border-gray-200  rounded-md justify-center">
      <button className="border-r-2 text-gray-300 hover:bg-gray-200 border-l-gray-200  font-bold text-xl flex justify-center items-center">
        <Minus className="w-4 h-4 mx-2" />
      </button>
      <div>
        <input
          type="text"
          value={4}
          className="bg-white focus:border-none focus:outline-none w-10 text-center"
        />
      </div>
      <button className="border-l-2 text-gray-300 hover:bg-gray-200 border-l-gray-200  font-bold flex justify-center items-center">
        <Plus className="w-4 h-4 mx-2" />
      </button>
    </div>
  );
};

type CartItemProps = {
  image: ReactNode;
  quantity?: number;
  price?: string;
  onChageQuantity?: (quantity: number) => void;
};
const CartItem: FC<CartItemProps> = ({ image, quantity }) => {
  return (
    <div className="min-w-max py-3  px-1">
      <div className="flex pb-2">
        <div className="border-2 bg-gray-200 rounded-md">{image}</div>
        <div className="mt-2 px-3">
          <p className="max-w-xs font-dmSans font-normal text-sm">
            T-shirts with multiple colors for men
          </p>
        </div>
        <button className="w-4 text-gray-400 ">
          <Dots className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between  mt-2 w-full">
        <UnitsInput />
        <p className="font-semibold font-dmSans">$78.99</p>
      </div>
    </div>
  );
};

export const Cart = () => {
  const cartState = useCartStateAtom();
  const checkout = useAtomValue(checkoutAtom);

  if (!cartState.isOpen) return null;

  const items = checkout?.lineItems ?? [];

  const itemsCount = checkout?.lineItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);

  const subTotalPrice = checkout?.lineItemsSubtotalPrice
    ? MAP_CURREMCY.get(checkout?.lineItemsSubtotalPrice?.currencyCode) +
      " " +
      checkout?.lineItemsSubtotalPrice?.amount
    : "";

  const totalPrice = checkout?.totalPrice
    ? MAP_CURREMCY.get(checkout?.totalPrice?.currencyCode) +
      " " +
      checkout?.totalPrice?.amount
    : "";

  return (
    <div className={csx("drawer fixed top-0 drawer-end drawer-open  z-50")}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side bg-white w-1/3 ">
        <div className="relative h-full">
          <button
            onClick={() => {
              cartState.onClose();
            }}
            className="text-gray-500  absolute top-0 right-2 z-30"
          >
            <Close className="w-5" />
          </button>
          <div className="bg-white mt-5 px-4 pt-4">
            <h3 className="font-cormorat font-black text-xl mb-2">
              Shopping cart
            </h3>
            <div className="max-h-[500px] overflow-y-auto overflow-x-hidden h-[500px] px-2   border-black">
              {items.map((item, idx) => {
                return (
                  <CartItem
                    key={idx}
                    image={
                      <NextImage
                        className="p-2"
                        src={item.variant?.image.src ?? ""}
                        width={50}
                        height={50}
                        alt=""
                      />
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex font-dmSans text-sm gap-y-2 absolute   px-4 left-0 top-[78%]  mt-4 flex-col w-full">
            <div className="flex justify-between">
              <p>Items ({itemsCount}):</p>
              <p className="font-semibold">{subTotalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p className="font-black">$32</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="font-black">{totalPrice}</p>
            </div>
            <Button text={"Comprar"} />
          </div>
        </div>
      </div>
    </div>
  );
};
