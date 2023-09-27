import ShopifyBuy from "shopify-buy";
export interface CommerceProviderProps extends ShopifyBuy.Config {
  children: React.ReactNode;
}

export const shopifyClient = ShopifyBuy.buildClient({
  storefrontAccessToken: "2e85ba2c7c4937c4262e385e0e0dc6b9",
  domain: "c04d18-2.myshopify.com",
  apiVersion: "2023-07",
});

export default shopifyClient;
