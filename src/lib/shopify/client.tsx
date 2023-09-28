import ShopifyBuy from "shopify-buy";
export interface CommerceProviderProps extends ShopifyBuy.Config {
  children: React.ReactNode;
}

export const shopifyClient = ShopifyBuy.buildClient({
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN ?? "",
  domain: process.env.STORE_FRONT_DOMAIN ?? "",
  apiVersion: "2023-07",
});

export default shopifyClient;
