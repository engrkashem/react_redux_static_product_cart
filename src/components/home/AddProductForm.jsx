import { useDispatch } from "react-redux";
import { addProductToStore } from "../../redux/products/actions";

// https://i.dummyjson.com/data/products/59/thumbnail.jpg
const AddProductForm = () => {
  const dispatch = useDispatch();

  const addProductFormSubmitHandler = (e) => {
    e.preventDefault();
    let name = e.target.productName.value;
    let category = e.target.category.value;
    let imgUrl = e.target.imgUrl.value;
    let price = e.target.price.value;
    let qty = e.target.qty.value;

    const productObj = {
      name,
      category,
      imgUrl,
      price,
      qty,
    };

    // dispatch action
    dispatch(addProductToStore(productObj));

    // reset input fields
    e.target.productName.value = "";
    e.target.category.value = "";
    e.target.imgUrl.value = "";
    e.target.price.value = "";
    e.target.qty.value = "";
  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={addProductFormSubmitHandler}
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
      >
        {/*  product name  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            name="productName"
            required
          />
        </div>
        {/*  product category  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            name="category"
            required
          />
        </div>
        {/*  product image url  */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            name="imgUrl"
            required
          />
        </div>
        {/*  price & quantity container  */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="ws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              name="price"
              required
            />
          </div>
          {/*  quantity  */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              name="qty"
              required
            />
          </div>
        </div>
        {/*  submit button  */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
