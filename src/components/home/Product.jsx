import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/actions";
import { deductQty } from "../../redux/products/actions";
import { addAmount } from "../../redux/bills/actions";

// https://i.dummyjson.com/data/products/59/thumbnail.jpg
const Product = ({ product }) => {
  // const cartProducts = useSelector((state) => state.cart);
  // console.log(cartProducts);

  const dispatch = useDispatch();
  const { name, category, price, qty, imgUrl } = product.details;

  const addToCartHandler = (productID) => {
    const cartProductObj = {
      id: productID,
      name,
      category,
      price,
      qty: 1,
      imgUrl,
    };
    // console.log(cartProductObj);
    dispatch(addToCart(cartProductObj));
    dispatch(deductQty(productID));
    dispatch(addAmount(price));
  };
  // console.log(cartProducts);

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={imgUrl} alt="product" />
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
          onClick={() => addToCartHandler(product.id)}
          className="lws-btnAddToCart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
