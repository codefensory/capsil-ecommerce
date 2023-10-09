import ShopifyBuy from "shopify-buy";
import { safeEnv } from "../../constants";
export interface CommerceProviderProps extends ShopifyBuy.Config {
  children: React.ReactNode;
}

export const shopifyClient = ShopifyBuy.buildClient({
  storefrontAccessToken: safeEnv.storeFrontAccessToken,
  domain: safeEnv.storeDomain,
  apiVersion: "2023-07",
});

export default shopifyClient;
