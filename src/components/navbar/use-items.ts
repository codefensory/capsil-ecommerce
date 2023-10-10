import { usePathname } from "next/navigation";

export const useItems = () => {
  const pathName = usePathname();

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

  return {
    items,
    isThisRoute,
  };
};
