"use client";
import csx from "classnames";
import { useAtomValue } from "jotai";
import { usePathname } from "next/navigation";
import { SimpleBag } from "~/components/icons";
import Logo from "~/components/logo";
import { hasProductsInCheckoutAtom } from "~/libs/shopify/atoms";
import { isOpenCartAtom } from "~/components/cart/atoms";
import { useSetAtom } from "jotai";
export const Navbar = () => {
  const pathName = usePathname();
  const hasProductsInCheckout = useAtomValue(hasProductsInCheckoutAtom);

  const setIsOpenCart = useSetAtom(isOpenCartAtom);
  const isThisRoute = (path: string) => {
    return pathName === path;
  };
  const items = [
    {
      text: "HOME",
      path: "/",
    },
    {
      text: "PRODUCTOS",
      path: "/productos",
    },
  ];

  return (
    <div className="w-full fixed top-0 z-30 border-2 bg-capsil-bg py-2">
      <div className="mx-auto max-w-5xl justify-around flex items-center">
        <div>
          <Logo />
        </div>
        <div className="flex gap-x-4">
          {items.map((item, idx) => (
            <div key={idx}>
              <a
                href={item.path}
                className={csx("font-dmSans  font-semibold", {
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
          {/* <button>
            <SearchIcon />
          </button>
           */}
          <button
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
