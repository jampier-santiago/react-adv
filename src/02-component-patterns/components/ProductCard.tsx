import { createContext } from "react";

import styles from "../styles/styles.module.css";

import { useProduct } from "../hooks/useProduct";

import { ProductButtons, ProductImage, ProductTitle } from "../components";

import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
