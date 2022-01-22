import { useState } from "react";
import { onChangeArgs, ProductInCar } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCar;
  }>({});

  const onProductCountChange = ({ counter, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCar: ProductInCar = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCar.count + counter, 0) > 0) {
        productInCar.count += counter;
        return { ...oldShoppingCart, [productInCar.id]: productInCar };
      } else {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }
    });
  };

  return { shoppingCart, onProductCountChange };
};
