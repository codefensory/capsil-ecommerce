import { FC } from "react";
export const Burguer: FC<{
  className?: string;
}> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={14}
      viewBox="0 0 18 14"
      fill="none"
      {...props}
    >
      <g id="Burger">
        <path
          id="Vector 148"
          d="M17 1L1 1"
          stroke="#2B3F6C"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          id="Vector 149"
          d="M17 7L1 7"
          stroke="#2B3F6C"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <path
          id="Vector 150"
          d="M17 13L1 13"
          stroke="#2B3F6C"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
