/**
 * An enum representing the possible input types in Builder.io.
 */
export enum BuilderInputType {
  TEXT = "text",
  HTML = "html",
  NUMBER = "number",
  BOOLEAN = "boolean",
  COLOR = "color",
  IMAGE = "image",
  FILE = "file",
  CODE = "code",
  RICH_TEXT = "richText",
  OPTIONS = "options",
  LIST = "list",
  MAP = "map",
  OBJECT = "object",
  COMPONENT = "component",
  MODEL = "model",
  PRODUCT = "product",
  CATEGORY = "category",
  BRAND = "brand",
  VARIANT = "variant",
  COLLECTION = "collection",
  PAGE = "page",
}

/**
 * A function that returns the display name of a Builder.io input type.
 *
 * @param type The Builder.io input type
 * @returns The display name of the input type
 */
function getBuilderInputTypeName(type: BuilderInputType): string {
  switch (type) {
    case BuilderInputType.TEXT:
      return "Text";
    case BuilderInputType.HTML:
      return "HTML";
    case BuilderInputType.NUMBER:
      return "Number";
    case BuilderInputType.BOOLEAN:
      return "Boolean";
    case BuilderInputType.COLOR:
      return "Color";
    case BuilderInputType.IMAGE:
      return "Image";
    case BuilderInputType.FILE:
      return "File";
    case BuilderInputType.CODE:
      return "Code";
    case BuilderInputType.RICH_TEXT:
      return "Rich Text";
    case BuilderInputType.OPTIONS:
      return "Options";
    case BuilderInputType.LIST:
      return "List";
    case BuilderInputType.MAP:
      return "Map";
    case BuilderInputType.OBJECT:
      return "Object";
    case BuilderInputType.COMPONENT:
      return "Component";
    case BuilderInputType.MODEL:
      return "Model";
    case BuilderInputType.PRODUCT:
      return "Product";
    case BuilderInputType.CATEGORY:
      return "Category";
    case BuilderInputType.BRAND:
      return "Brand";
    case BuilderInputType.VARIANT:
      return "Variant";
    case BuilderInputType.COLLECTION:
      return "Collection";
    case BuilderInputType.PAGE:
      return "Page";
    default:
      return "";
  }
}
