import { useDispatch } from "react-redux";
import {
  addCartQty,
  deductCartQty,
  deleteFromCart,
} from "../../redux/cart/actions";
import { addQty, deductQty } from "../../redux/products/actions";

const CartItem = ({ cartProduct }) => {
  const dispatch = useDispatch();

  const { id, name, category, price, qty, imgUrl } = cartProduct;

  const addQtyToCartHandler = (productId) => {
    dispatch(addCartQty(productId));
    dispatch(deductQty(productId));
  };

  const removeQtyfromCartHandler = (productId) => {
    dispatch(deductCartQty(productId));
    dispatch(addQty(productId));
  };

  const deleteProductfromcart = (productId) => {
    dispatch(deleteFromCart(productId));
    dispatch(addQty(productId));
  };

  return (
    <div className="space-y-6">
      {/*  Cart Item  */}
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/*  cart image  */}
          <img className="lws-cartImage" src={imgUrl} alt="product" />
          {/*  cart item info  */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{name}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">{price}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/*  amount buttons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => addQtyToCartHandler(id)}
              className="lws-incrementQuantity"
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{qty}</span>
            <button
              onClick={() => removeQtyfromCartHandler(id)}
              className="lws-decrementQuantity"
            >
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/*  price --> */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{price * qty}</span>
          </p>
        </div>
        {/*  delete button  */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button
            onClick={() => deleteProductfromcart(id)}
            className="lws-removeFromCart"
          >
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {/*  Cart Items Ends */}
    </div>
  );
};

export default CartItem;
