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
      <div className="max-w-7xl flex justify-center items-center mx-auto py-24">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="font-dmSans text-lg mt-2">{textContent}</p>
          <div className="flex gap-x-1 mt-2">
            {builderBlock?.children &&
              builderBlock.children.map((block) => {
                return <BuilderBlockComponent key={block.id} block={block} />;
              })}
          </div>
        </div>
        <div>
          <NextImage
            src={"/home_kofe_one_hero.png"}
            width={520}
            height={350}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
