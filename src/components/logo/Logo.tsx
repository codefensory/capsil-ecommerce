import { BrownVariant } from "./Brown";
import { Green } from "./Green";
import { FC } from "react";
import csx from "classnames";
import { WithClassName } from "~/types";
import styles from "./logo.module.css";
// logo type with variant prop

type LogoProps = {
  variant?: "brown" | "green";
  size?: "lg" | "md" | "sm";
};

// Logo component
export const Logo: FC<LogoProps & WithClassName> = ({
  variant = "brown",
  size = "sm",
  className,
}) => {
  const localClassName = csx(
    "capsil_logo",
    {
      [styles.lg]: size === "lg",
      [styles.md]: size === "md",
      [styles.sm]: size === "sm",
    },
    className
  );

  switch (variant) {
    case "brown":
      return <BrownVariant className={localClassName} />;
    case "green":
      return <Green className={localClassName} />;
    default:
      return null;
  }
};
