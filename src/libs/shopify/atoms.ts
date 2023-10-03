import { Getter, Setter, atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Checkout, CheckoutLineItemInput } from "shopify-buy";
import { shopifyClient } from "~/libs/shopify";
import { Product } from "./types";

export const productsAtom = atom<Product[]>([]);

export const checkoutAtom = atomWithStorage<Checkout | null>(
  "CAPSIL_CHECKOUT",
  null
);

const safeGetCheckout = async (get: Getter, set: Setter) => {
  const checkout = get(checkoutAtom);
  if (!checkout || !checkout.id) {
    const newCheckout = await shopifyClient.checkout.create({});
    set(checkoutAtom, newCheckout);
    return newCheckout;
  }
  return checkout;
};

export const addVariantToCartAtom = atom(
  null,
  async (
    get,
    set,
    payload: {
      variantId: string;
      quantity: number;
    }
  ) => {
    const lines = [
      {
        quantity: payload.quantity,
        variantId: payload.variantId,
      } as CheckoutLineItemInput,
    ];
    let checkout = await safeGetCheckout(get, set);

    const newCheckout = await shopifyClient.checkout.addLineItems(
      checkout.id ?? "",
      lines
    );
    set(checkoutAtom, newCheckout);
  }
);

export const updateQuantityCartAtom = atom(
  null,
  async (
    get,
    set,
    payload: {
      lineItemId: string;
      quantity: number;
    }
  ) => {
    const { lineItemId, quantity } = payload;
    const checkout = await safeGetCheckout(get, set);
    const lineToUpdate = [
      {
        id: lineItemId,
        quantity,
      },
    ];
    const newCheckout = await shopifyClient.checkout.updateLineItems(
      checkout.id,
      lineToUpdate
    );
    set(checkoutAtom, newCheckout);
  }
);

export const removeALineFromCartAtom = atom(
  null,
  async (get, set, lineItemId: string) => {
    const checkout = get(checkoutAtom);
    const newCheckout = await shopifyClient.checkout.removeLineItems(
      checkout?.id ?? "",
      [lineItemId]
    );
    set(checkoutAtom, newCheckout);
  }
);
