"use client";
import { useCartStateAtom } from "./atoms";
import NextImage from "next/image";
import { Minus, Plus, Dots, Close } from "~/components/icons";
import { Button } from "~/components/button";
import csx from "classnames";

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

const CartItem = () => {
  return (
    <div className="min-w-max py-3  px-1">
      <div className="flex pb-2">
        <div className="border-2 bg-gray-200 rounded-md">
          <NextImage
            className="p-2"
            src={"/cafe1.png"}
            width={50}
            height={50}
            alt=""
          />
        </div>
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
  if (!cartState.isOpen) return null;
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
              {Array.from({ length: 3 }).map((_, idx) => {
                return <CartItem key={idx} />;
              })}
            </div>
          </div>
          <div className="flex font-dmSans text-sm gap-y-2 absolute   px-4 left-0 top-[78%]  mt-4 flex-col w-full">
            <div className="flex justify-between">
              <p>Items (3):</p>
              <p className="font-semibold">$32</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p className="font-black">$32</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="font-black">$220.00</p>
            </div>
            <Button text={"Comprar"} />
          </div>
        </div>
      </div>
    </div>
  );
};
