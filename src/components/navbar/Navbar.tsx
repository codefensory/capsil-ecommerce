"use client";
import csx from "classnames";
import { useAtomValue, useSetAtom } from "jotai";
import { isOpenCartAtom } from "~/components/cart/atoms";
import { Burguer, SimpleBag } from "~/components/icons";
import Logo from "~/components/logo";
import { hasProductsInCheckoutAtom } from "~/libs/shopify/atoms";
import MobileDrawer from "./MobileDrawer";
import { useIsOpenMenuAtom } from "./atoms";
import { useItems } from "./use-items";
import NextLink from "next/link";

export const Navbar = () => {
  const { isThisRoute, items } = useItems();
  const hasProductsInCheckout = useAtomValue(hasProductsInCheckoutAtom);

  const isOpenMenuHandler = useIsOpenMenuAtom();

  const setIsOpenCart = useSetAtom(isOpenCartAtom);

  return (
    <div className="w-full fixed top-0 z-30 border-2 bg-capsil-bg py-2 toTable:py-1">
      <MobileDrawer />
      <div className="mx-auto max-w-5xl toTable:px-4 justify-between flex items-center">
        <NextLink href={"/"}>
          <Logo />
        </NextLink>
        <div className="flex gap-x-4 mobile:hidden">
          {items.map((item, idx) => (
            <div key={idx}>
              <a
                href={item.path}
                className={csx("font-dmSans  font-semibold toTable:text-base", {
                  "border-b-2 border-b-capsil-green pb-1": isThisRoute(
                    item.path
                  ),
                })}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
        <div className="text-capsil-brown flex gap-x-3">
          <button
            onClick={isOpenMenuHandler.onOpen}
            className="icon hidden mobile:block"
          >
            <Burguer />
          </button>
          <button
            className="icon"
            onClick={() => {
              setIsOpenCart(true);
            }}
          >
            <SimpleBag includeCircle={hasProductsInCheckout} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
