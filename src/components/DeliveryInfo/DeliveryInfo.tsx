import { DeliveryItem } from "./DeliveryItem";

export const DeliveryInfo = () => {
  return (
    <div className="flex flex-col w-full items-center bg-white p-16">
      <h1 className="font-medium text-5xl text-[#341A19]">
        Como funciona nuestro servicio de delivery
      </h1>
      <div className="flex justify-around mt-10 w-full max-w-7xl">
        <DeliveryItem
          src="/coffe-cup 1.png"
          alt="Elejir taza de café"
          text="Escoje tu café"
        />
        <DeliveryItem
          src="/food-truck 1.png"
          alt="Camión de delivery"
          text="Lo llevamos a tu casa"
        />
        <DeliveryItem
          src="/coffe-cup 2.png"
          alt="Taza de café"
          text="Disfruta tu pedido"
        />
      </div>
    </div>
  );
};
