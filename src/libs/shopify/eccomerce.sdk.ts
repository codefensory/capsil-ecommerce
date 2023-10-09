import client from "./client";
import { Product } from "./types";
export const getProducts = async (): Promise<Product[]> => {
  const products = await client.product.fetchAll();
  return products.map((pr) => {
    return JSON.parse(JSON.stringify(pr));
  });
};
