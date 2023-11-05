import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/actions";
import { deductQty } from "../../redux/products/actions";

// https://i.dummyjson.com/data/products/59/thumbnail.jpg
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { name, category, price, qty } = product.details;

  const addToCartHandler = (product) => {
    const cartProductObj = {
      id: product.id,
      name: product.details.name,
      category: product.details.category,
      price: product.details.price,
      qty: 1,
    };
    dispatch(addToCart(cartProductObj));
    dispatch(deductQty(product.id));
  };

  return (
    <div className="lws-productCard">
      <img
        className="lws-productImage"
        src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
        alt="product"
      />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{qty}</span>
          </p>
        </div>
        <button
          onClick={() => addToCartHandler(product)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
