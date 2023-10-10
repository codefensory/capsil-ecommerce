import csx from "classnames";
import { Drawer } from "../drawer";
import { useIsOpenMenuAtom } from "./atoms";
import { useItems } from "./use-items";
const MobileDrawer = () => {
  const isOpenHandler = useIsOpenMenuAtom();
  const { items, isThisRoute } = useItems();

  return (
    <Drawer isOpen={isOpenHandler.isOpen} onClose={isOpenHandler.onClose}>
      <ul className="w-48 flex justify-center flex-col items-center h-full font-cormorat font-black text-black">
        {items.map((item) => (
          <li
            className={csx("my-3", {
              "border-b-2 border-b-capsil-green pb-1": isThisRoute(item.path),
            })}
            key={item.path}
          >
            <a href={item.path}>{item.text}</a>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default MobileDrawer;
