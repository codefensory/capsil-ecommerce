import { GridProducts } from "~/components";
import { getProducts } from "../lib/shopify/eccomerce.sdk";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <GridProducts products={products} />
    </div>
  );
}
