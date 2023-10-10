"use client";

import { BuilderBlockComponent, BuilderElement } from "@builder.io/react";
import NextImage from "next/image";
import { FC, ReactNode } from "react";

type HeroHomeProps = {
  title: string;
  builderBlock?: BuilderElement;
  children?: ReactNode;
  textContent: string;
};
export const HeroHome: FC<HeroHomeProps> = ({
  builderBlock,
  title,
  textContent,
}) => {
  return (
    <div className="bg-capsil-bg">
      <div className="max-w-7xl  tablet:px-4 flex justify-center mobile:flex-col items-center mx-auto py-24 tablet:py-10 mobile:py-4 mobile:px-4 toTable:mt-4">
        <div className="max-w-lg tablet:max-w-xs mobile:order-2">
          <h1 className="text-5xl tablet:text-3xl font-bold mobile:text-2xl mobile:font-bold mobile:text-center">
            {title}
          </h1>
          <p className="font-dmSans text-lg mt-2 tablet:text-sm mobile:text-xs mobile:text-center">
            {textContent}
          </p>
          <div className="flex gap-x-1 mt-2 mobile:justify-center">
            {builderBlock?.children &&
              builderBlock.children.map((block) => {
                return <BuilderBlockComponent key={block.id} block={block} />;
              })}
          </div>
        </div>
        <div className="mobile:order-1">
          <NextImage
            src={"/home_kofe_one_hero.png"}
            width={520}
            height={350}
            className="object-cover mobile:w-60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
