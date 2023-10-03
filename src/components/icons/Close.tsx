import { FC } from "react";

export const Close: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="M23.494 21.07a1.716 1.716 0 1 1-2.427 2.427L12 14.428l-9.07 9.066a1.717 1.717 0 0 1-2.427-2.427L9.573 12 .505 2.93A1.716 1.716 0 1 1 2.933.505L12 9.574 21.07.502a1.717 1.717 0 0 1 2.427 2.427L14.427 12l9.067 9.07Z"
      />
    </svg>
  );
};
