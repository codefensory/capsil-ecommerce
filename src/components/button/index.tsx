import cx from "classnames";
import { FC } from "react";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
  text: string;
};
export const Button: FC<ButtonProps> = ({ className, variant, text }) => {
  return (
    <button
      className={cx(className, {
        "bg-capsil-green border-capsil-green border-2 text-white px-6 py-2":
          variant === "primary",
        "border-capsil-green border-2 text-capsil-green px-6 py-2":
          variant === "secondary",
      })}
    >
      <span>{text}</span>
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};
export default Button;
