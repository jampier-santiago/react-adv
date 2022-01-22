import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardMainProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: ProductTitleProps) => JSX.Element;
  Image: ({ image }: ProductImageProps) => JSX.Element;
  Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  counter: number;
  product: Product;
}

export interface ProductInCar extends Product {
  count: number;
}
