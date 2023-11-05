import AddProductForm from "./AddProductForm";
import Products from "./Products";

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <AddProductForm />
    </div>
  );
};

export default Home;
