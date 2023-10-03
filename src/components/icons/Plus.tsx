import { FC } from "react";
export const Plus: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path fill="currentColor" d="M19.5 13.5h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2Z" />
    </svg>
  );
};
