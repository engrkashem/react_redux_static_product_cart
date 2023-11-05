import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          {/* Cart Items */}
          <CartItem />

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
