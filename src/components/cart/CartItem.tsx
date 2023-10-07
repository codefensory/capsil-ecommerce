"use client";
import { FC, ReactNode, useMemo, useState } from "react";
import { Dots } from "~/components/icons";
import { useHover } from "@uidotdev/usehooks";
import csx from "classnames";
import { useRef } from "react";

type CartItemProps = {
  image: ReactNode;
  quantityNode?: ReactNode;
  price?: string;
  headLine: string;
  onChageQuantity?: (quantity: number) => void;
  onDelete?: () => void;
};

const useHoverWithDebounce = () => {
  const [hoverRef, isHovered] = useHover();
  const [localIsHovered, setLocalHovered] = useState<boolean>(isHovered);
  const timoutRef = useRef<any>(null);

  useMemo(() => {
    if (timoutRef.current) {
      clearTimeout(timoutRef.current);
    }
    timoutRef.current = setTimeout(() => {
      setLocalHovered(isHovered);
    }, 500);
  }, [isHovered, setLocalHovered]);

  return [hoverRef, localIsHovered];
};

export const CartItem: FC<CartItemProps> = ({
  image,
  quantityNode,
  headLine,
  price,
  onDelete,
}) => {
  const [hoverRef, isHovered] = useHoverWithDebounce();
  return (
    <div className="py-3 min-w-[310px]  px-1">
      <div className="flex pb-2">
        <div className="border-2 bg-gray-200 rounded-md">{image}</div>
        <div className="mt-2 px-3 grow">
          <p className="max-w-xs font-dmSans font-normal text-sm">{headLine}</p>
        </div>

        <div
          ref={hoverRef as any}
          className={csx("dropdown dropdown-end", {
            "dropdown-open": isHovered,
          })}
        >
          <button tabIndex={0} className="w-4 text-gray-400 -mt-4">
            <Dots className="w-5 h-5" />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content menu border-2 p-2  shadow z-[1500]  bg-white rounded-sm w-32"
          >
            <li className="font-dmSans">
              <a
                onClick={() => {
                  onDelete?.();
                }}
              >
                Eliminar
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between  mt-2 w-full">
        {quantityNode}
        <p className="font-semibold font-dmSans">{price}</p>
      </div>
    </div>
  );
};
