import { DeliveryItem } from "./DeliveryItem";

export const DeliveryInfo = () => {
  return (
    <div className="flex flex-col w-full items-center bg-white p-16 tablet:py-5 mobile:px-3 mobile:py-3">
      <h1 className="font-semibold toTable:text-center text-5xl  tablet:text-4xl mobile:text-2xl">
        Como funciona nuestro servicio de delivery
      </h1>
      <div className="flex justify-around mt-10 tablet:mt-2 w-full max-w-7xl mobile:flex-col mobile:mt-3">
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
