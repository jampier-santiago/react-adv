import { ProductCardMainProps } from "../interfaces/interfaces";

import { ProductCard as ProductCardComponent } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";

export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardMainProps = Object.assign(
  ProductCardComponent,
  {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
  }
);
