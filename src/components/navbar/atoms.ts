import { atom } from "jotai";
import { createDisclousureForAtom } from "~/utils/disclousure";
export const isOpenMenuAtom = atom(false);

export const useIsOpenMenuAtom = createDisclousureForAtom(isOpenMenuAtom);
