import { FC } from "react";
export const BagIcon: FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 4.4375C2.03249 4.4375 0.4375 6.03249 0.4375 8V11.75C0.4375 13.7175 2.03249 15.3125 4 15.3125H10C11.9675 15.3125 13.5625 13.7175 13.5625 11.75V8C13.5625 6.03249 11.9675 4.4375 10 4.4375H4ZM3.4375 4.25C3.4375 2.28249 5.03249 0.6875 7 0.6875C8.96751 0.6875 10.5625 2.28249 10.5625 4.25V6.5C10.5625 6.81066 10.3107 7.0625 10 7.0625C9.68934 7.0625 9.4375 6.81066 9.4375 6.5V4.25C9.4375 2.90381 8.34619 1.8125 7 1.8125C5.65381 1.8125 4.5625 2.90381 4.5625 4.25V6.5C4.5625 6.81066 4.31066 7.0625 4 7.0625C3.68934 7.0625 3.4375 6.81066 3.4375 6.5V4.25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const SimpleBag: FC<{
  className?: string;
  includeCircle?: boolean;
}> = ({ className, includeCircle }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M5.03715 10.9713C5.30212 8.98412 6.99726 7.5 9.00207 7.5H15.9979C18.0027 7.5 19.6979 8.98412 19.9628 10.9713L20.8962 17.9713C21.2159 20.3693 19.3504 22.5 16.9313 22.5H8.06873C5.64958 22.5 3.7841 20.3693 4.10382 17.9713L5.03715 10.9713Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 9.5V6.5C16.5 4.29086 14.7091 2.5 12.5 2.5V2.5C10.2909 2.5 8.5 4.29086 8.5 6.5L8.5 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {includeCircle && (
        <circle cx="19.5" cy="6.5" r="4.5" fill="#89B964" stroke="white" />
      )}
    </svg>
  );
};
