import { ProductCard } from "../components";

const product = { id: "123", title: "Coffe Mug", image: "./coffee-mug.png" };

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ProductCard product={product}>
          <ProductCard.Image image={product.image} />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
