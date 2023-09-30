import { RenderBuilderContent } from "../components/builder";
import builderio from "~/libs/builderio";
import { getProducts } from "~/lib/shopify/eccomerce.sdk";
import { JotaiHydratation } from "../components/JotaiHydratation";
import "../builder-registry";
export default async function Home() {
  const page = await builderio
    .get("page", {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();

  const products = await getProducts();

  return (
    <>
      <JotaiHydratation productsFromServer={products} />
      <RenderBuilderContent content={page || undefined} />
    </>
  );
}
