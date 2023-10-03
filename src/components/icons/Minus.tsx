import { FC } from "react";
export const Minus: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path fill="currentColor" d="M19.5 13.5h-14v-2h14v2Z" />
    </svg>
  );
};
