import { useMemo, useState } from "react";
import { FC } from "react";
import { debounce } from "~/utils/func";
import { useEffect } from "react";
import styles from "./style.module.css";
import { Minus, Plus } from "~/components/icons";

type UnitsInputProps = {
  value?: number;
  updateQuantity?: (quantity: number) => void;
  debounceMS?: number;
};

export const UnitsInput: FC<UnitsInputProps> = ({
  value = 0,
  debounceMS = 1000,
  updateQuantity,
}) => {
  const [localValue, updateValue] = useState(value);

  const debouncedFunction = useMemo(() => {
    return updateQuantity ? debounce(updateQuantity, debounceMS) : () => {};
  }, []);

  useEffect(() => {
    if (updateQuantity) debouncedFunction(localValue);
  }, [localValue]);
  return (
    <div className={styles.counter}>
      <button
        onClick={() => {
          updateValue(localValue - 1);
        }}
        className={styles.btn}
      >
        <Minus className="w-4 h-4 mx-2" />
      </button>
      <div>
        <input
          type="text"
          value={localValue}
          className="bg-white focus:border-none focus:outline-none w-10 text-center"
        />
      </div>
      <button
        onClick={() => {
          updateValue(localValue + 1);
        }}
        className={styles.btn}
      >
        <Plus className="w-4 h-4 mx-2" />
      </button>
    </div>
  );
};
