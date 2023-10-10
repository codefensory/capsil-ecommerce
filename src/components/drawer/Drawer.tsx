import csx from "classnames";
import { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Close } from "../icons";
type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  includeOverlay?: boolean;
};

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  includeOverlay = true,
}) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  if (!state) {
    return null;
  }

  return createPortal(
    <div>
      {includeOverlay && isOpen && (
        <div className="drawer-overlay z-50 bg-capsil-brown opacity-40 w-full fixed top-0 left-0 h-full"></div>
      )}
      {isOpen && (
        <div
          className={csx("drawer fixed top-0 z-50", {
            "drawer-open drawer-end": isOpen,
          })}
        >
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side border-2 border-x-gray-100 shadow-md bg-white w-1/3 ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            />
            <div className="relative h-full">
              <button
                onClick={onClose}
                className="text-gray-500  absolute top-3 right-3 z-30"
              >
                <Close className="w-5" />
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body
  );
};
