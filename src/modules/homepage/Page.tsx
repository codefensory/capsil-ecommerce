"use client";
import csx from "classnames";
import { FC } from "react";
import { BaseButton } from "~/components/button";
import { BrownVariant } from "~/components/logo";
import Image from "./Image";
import { Navigation } from "swiper/modules";
import { cloneElement } from "react";
import "swiper/css";

import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

const ItemDescription: FC<{
  title: string;
  description: string;
  className?: string;
  desktop?: boolean;
}> = ({ description, title, className, desktop = false }) => {
  return (
    <div
      className={csx(
        "xl:absolute mt-4  mx-auto  my-auto text-white xl:text-capsil-brown max-w-[220px] xl:max-w-xs",
        className,
        { "text-left": desktop },
        { "text-center": !desktop }
      )}
    >
      <h3
        className={csx("font-semibold font-cormorat text-2xl xl:text-2xl", {
          "text-capsil-brown": !desktop,
        })}
      >
        {title}
      </h3>
      <p
        className={csx("text-sm xl:text-lg  mt-2", {
          "text-capsil-brown mt-0": !desktop,
        })}
      >
        {description}
      </p>
      {!desktop && (
        <div className="flex justify-center flex-col items-cente mb-5 text-capsil-brown mt-2">
          <h3 className="text-center font-dmSans text-2xl font-bold mb-1">
            S/. 28
          </h3>
          <div className="flex justify-center space-x-3">
            <BaseButton>Comprar</BaseButton>
          </div>
        </div>
      )}
    </div>
  );
};

const COFFE_BENEFITS = [
  <ItemDescription
    title="Selección de granos"
    description="Se seleccionan los granos de más alta calidad"
    className="top-20 left-16"
  />,
  <ItemDescription
    title="Cultivo cuidadoso"
    description="Se cultivan en microclimas específicos  en altitudes más elevadas, lo que influye en el perfil de sabor del grano."
    className="top-96 left-16 xl:text-white"
  />,
  <ItemDescription
    title="Calidad Superior"
    description="Los granos de café especial se seleccionan meticulosamente,
garantizando una calidad superior con sabores más complejos y refinados."
    className="top-20 right-14"
  />,
  <ItemDescription
    title="Producción Sostenible"
    description="Muchos cafés especiales se cultivan bajo prácticas sostenibles y de comercio justo,
lo que beneficia tanto al medio ambiente como a las comunidades productoras"
    className="top-96 right-14 xl:text-white"
  />,
];

const Desktop = () => {
  const benefits = COFFE_BENEFITS.map((item, idx) => {
    const cloned = cloneElement(item, {
      desktop: true,
    });
    return cloned;
  });
  return (
    <div className="min-h-screen relative overflow-x-hidden w-full bg-capsil-bg">
      <div className="bg-capsil-brown w-full h-[calc(100vh-40vh)] absolute bottom-0"></div>
      <div className="flex pt-3 flex-row justify-center">
        <BrownVariant />
      </div>
      <div className="w-full flex-col items-center font-dmSans relative flex justify-center max-w-7xl mx-auto">
        <Image />
        {benefits}
        <div className="flex justify-center flex-col items-cente mb-5 text-white">
          <h3 className="text-white text-center font-dmSans text-4xl font-bold mb-3">
            S/. 28
          </h3>
          <div className="flex justify-center space-x-3">
            <BaseButton>Comprar</BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Mobile = () => {
  return (
    <div className="bg-capsil-bg h-screen relative">
      <div className="flex pt-3 flex-row justify-center">
        <BrownVariant />
      </div>
      <div className="flex justify-center">
        <Image />
      </div>
      <div className="w-full h-64 absolute bottom-4">
        <Swiper modules={[Navigation]} slidesPerView={1} className="h-full">
          {COFFE_BENEFITS.map((item, idx) => (
            <SwiperSlide
              className="flex items-center justify-center  h-full"
              key={idx}
            >
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export const Page = () => {
  return (
    <div>
      <div className="xl:hidden">
        <Mobile />
      </div>
      <div className="hidden xl:block">
        <Desktop />
      </div>
    </div>
  );
};
