import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart);

  const noOfProductAddedToCart = cartProducts.reduce(
    (totalProduct, currentProduct) => totalProduct + currentProduct.qty,
    0
  );

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to={"/"}>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4">
          <Link to={"/"} className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </Link>
          <Link to={"/cart"} className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{noOfProductAddedToCart}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
