"use client";
import { atom } from "jotai";
import { createDisclousureForAtom } from "../../utils/disclousure";

export const isOpenCartAtom = atom(false);
export const useCartStateAtom = createDisclousureForAtom(isOpenCartAtom);
