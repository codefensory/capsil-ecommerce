import cx from "classnames";
import { FC, ButtonHTMLAttributes } from "react";

export type IButtonVariant = {
  variant?: "primary" | "secondary";
};

export type BaseButtonProps = IButtonVariant &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const BaseButton: FC<BaseButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(props.className, {
        "bg-capsil-green border-capsil-green border-2 text-white px-6 py-2":
          variant === "primary",
        "border-capsil-green border-2 text-capsil-green px-6 py-2":
          variant === "secondary",
      })}
    >
      <span>{children}</span>
    </button>
  );
};

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  text: string;
} & IButtonVariant;
export const Button: FC<ButtonProps> = ({ className, variant, text }) => {
  return (
    <BaseButton variant={variant} className={className}>
      <span>{text}</span>
    </BaseButton>
  );
};

export default Button;
