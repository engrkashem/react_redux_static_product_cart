import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productContainer " id="lws-productContainer">
      {products.length == 0 ? (
        <h6>No Product to Show</h6>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
