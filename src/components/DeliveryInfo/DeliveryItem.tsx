interface DeliveryItemProps {
  src: string;
  alt: string;
  text: string;
}

export const DeliveryItem = ({ src, alt, text }: DeliveryItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <img className="h-[170px] w-auto" src={src} alt={alt} />
      <h4 className="font-bold text-3xl mt-4">{text}</h4>
    </div>
  );
};
