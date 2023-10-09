"use client";
import csx from "classnames";
import { useAtomValue, useSetAtom } from "jotai";
import NextImage from "next/image";
import { CheckoutLineItem } from "shopify-buy";
import { BaseButton } from "~/components/button";
import { Close } from "~/components/icons";
import {
  checkoutAtom,
  updateQuantityCartAtom,
  removeALineFromCartAtom,
} from "~/libs/shopify";
import { MAP_CURREMCY } from "../../constants";
import { UnitsInput } from "./UnitsInput";
import { useCartStateAtom } from "./atoms";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartState = useCartStateAtom();
  const checkout = useAtomValue(checkoutAtom);

  const updateQuantity = useSetAtom(updateQuantityCartAtom);

  const removeALineFromCart = useSetAtom(removeALineFromCartAtom);

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

  const priceItem = (item: CheckoutLineItem) => {
    const amount = (Number(item.variant?.price.amount) ?? 0) * item.quantity;

    return (
      (MAP_CURREMCY.get(item.variant?.price?.currencyCode ?? "") ?? "") +
      " " +
      amount
    );
  };

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
                    headLine={item.title ?? ""}
                    key={idx}
                    onDelete={() => {
                      console.log("delete", item.id);

                      removeALineFromCart(item.id);
                    }}
                    quantityNode={
                      <UnitsInput
                        value={item.quantity}
                        updateQuantity={(quantity) =>
                          updateQuantity({
                            quantity: quantity,
                            lineItemId: item.id,
                          })
                        }
                      />
                    }
                    price={priceItem(item)}
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
            {/* <div className="flex justify-between">
              <p>Shipping:</p>
              <p className="font-black">$32</p>
            </div>
             */}
            <div className="flex justify-between">
              <p>Total:</p>
              <p className="font-black">{totalPrice}</p>
            </div>
            <BaseButton
              onClick={() => {
                window.open(checkout?.webUrl ?? "");
              }}
            >
              Comprar
            </BaseButton>
            <BaseButton variant="secondary">Venta por whatsApp</BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};
