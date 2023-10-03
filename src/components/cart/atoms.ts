"use client";
import { atom } from "jotai";
import { createDisclousureForAtom } from "../../utils/disclousure";

export const isOpenCartAtom = atom(true);
export const useCartStateAtom = createDisclousureForAtom(isOpenCartAtom);
