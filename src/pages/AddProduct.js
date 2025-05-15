import ProductForm from "../components/ProductForm";

function AddProduct({ products, setProducts }) {
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <ProductForm onAdd={handleAddProduct} />
    </div>
  );
}

export default AddProduct;
