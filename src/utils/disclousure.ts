import { PrimitiveAtom, useAtom } from "jotai";
import { useMemo } from "react";
export const createDisclousureForAtom = (atom: PrimitiveAtom<boolean>) => {
  return () => {
    const [state, setState] = useAtom(atom);
    return useMemo(() => {
      return {
        isOpen: state,
        onOpen: () => setState(true),
        onClose: () => setState(false),
        onToggle: () => setState((state) => !state),
      };
    }, [state, setState]);
  };
};
