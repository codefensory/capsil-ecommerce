import NextImage from "next/image";
interface DeliveryItemProps {
  src: string;
  alt: string;
  text: string;
}

export const DeliveryItem = ({ src, alt, text }: DeliveryItemProps) => {
  return (
    <div className="flex flex-col items-center px-1 mobile:py-2">
      <div className="h-[170px] flex justify-center items-center  tablet:w-28 mobile:h-[170px]">
        <NextImage src={src} width={170} height={170} alt={alt} />
      </div>
      <h4 className="font-bold text-3xl mt-4 tablet:text-xl toTable:text-center mobile:text-xl">
        {text}
      </h4>
    </div>
  );
};
