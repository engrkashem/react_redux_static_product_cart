import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  // console.log(cartProducts);
  return (
    <div className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          {/* Cart Items */}
          {cartProducts.length == 0 ? (
            <h6>Your Products cart is Empty</h6>
          ) : (
            cartProducts.map((cartProduct) => (
              <CartItem key={cartProduct.id} cartProduct={cartProduct} />
            ))
          )}

          {/*  Bill Details  */}
          <div>
            <BillDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
