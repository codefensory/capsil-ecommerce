"use client";
import { Builder } from "@builder.io/react";
import { default as dinamyc } from "next/dynamic";
import { HeroHome } from "./components/hero/HeroHome";
import { BuilderInputType } from "./utils";

Builder.registerComponent(
  dinamyc(() => import("./components/navbar/Navbar")),
  {
    name: "navbar",
    noWrap: true,
  }
);

Builder.registerComponent(
  dinamyc(() => import("./components/products/GridProducts")),
  {
    name: "productsGalery",
    inputs: [
      {
        name: "title",
        type: BuilderInputType.TEXT,
        defaultValue: "Todos nuestros cafés cuentan su propia historia",
      },
      {
        name: "smallTitle",
        type: BuilderInputType.TEXT,
        defaultValue: "Nuestra selección de cafés de alta calidad",
      },
    ],
  }
);

Builder.registerComponent(
  dinamyc(() => import("./components/button/index")),
  {
    name: "button",
    inputs: [
      {
        name: "texth",
        type: BuilderInputType.TEXT,
      },
      {
        name: "variant",
        type: BuilderInputType.TEXT,
        enum: ["primary", "secondary"],
      },
    ],
  }
);

const defaultBlocks = [
  {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexShrink: "0",
        position: "relative",
        marginTop: "30px",
        textAlign: "center",
        lineHeight: "normal",
        height: "auto",
      },
    },
    component: {
      name: "button",
      options: {
        text: "Comprar",
      },
    },
  },
  {
    "@type": "@builder.io/sdk:Element",
    responsiveStyles: {
      large: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexShrink: "0",
        position: "relative",
        marginTop: "30px",
        textAlign: "center",
        lineHeight: "normal",
        height: "auto",
      },
    },
    component: {
      name: "button",
      options: {
        text: "Nosotros",
      },
    },
  },
];

Builder.registerComponent(HeroHome, {
  name: "heroHome",
  defaultStyles: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "50px",
    paddingBottom: "50px",
    marginTop: "0px",
    width: "100vw",
    marginLeft: "calc(50% - 50vw)",
  },
  static: true,
  canHaveChildren: true,
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue:
        "De la finca a tu taza: café de calidad con raíces profundas.",
    },
    {
      name: "textContent",
      type: "longText",
      defaultValue: `
      En nuestra tienda, te ofrecemos café de calidad excepcional,
            seleccionado cuidadosamente directamente de agricultores pequeños.
            Cada taza es una experiencia única que respeta las raíces de la
            tradición y la calidad en cada grano.
      `,
    },
  ],
  defaultChildren: defaultBlocks as any,
});

Builder.registerComponent(
  dinamyc(() => import("./components/DeliveryInfo")),
  { name: "DeliveryInfo" }
);

Builder.registerComponent(
  dinamyc(() => import("./components/AboutCoffeInfo")),
  { name: "AboutCoffeInfo" }
);
Builder.registerComponent(
  dinamyc(() => import("./components/footer/MainFooter")),
  { name: "MainFooter" }
);
