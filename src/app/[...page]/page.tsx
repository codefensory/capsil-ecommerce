import { RenderBuilderContent } from "~/components/builder";
import builderio from "~/libs/builderio";
import "../../builder-registry";
import { getProducts } from "~/libs/shopify/eccomerce.sdk";
import { JotaiHydratation } from "~/components/JotaiHydratation";
import { Cart } from "~/components/cart";
interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builderio
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  const products = await getProducts();

  return (
    <>
      <Cart />
      <JotaiHydratation productsFromServer={products} />
      <RenderBuilderContent content={content} />
    </>
  );
}
