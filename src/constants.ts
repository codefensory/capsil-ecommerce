export const safeEnv = {
  storeFrontAccessToken: process.env.NEXT_PUBLIC_STORE_FRONT_ACCESS_TOKEN ?? "",
  storeDomain: process.env.NEXT_PUBLIC_STORE_FRONT_DOMAIN ?? "",
  builderApiKey: process.env.NEXT_PUBLIC_BUILDER_API_KEY ?? "",
};
export const REVALIDATIONS_TIME = 3600;

export const MAP_CURREMCY = new Map([
  ["USD", "$"],
  ["PEN", "S/."],
]);
