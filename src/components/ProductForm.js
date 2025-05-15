import { useState } from "react";

function ProductForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Nam",
    code: "",
    image: "",
    price: "",
    oldPrice: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    // Reset form sau khi submit
    setFormData({
      name: "",
      category: "Nam",
      code: "",
      image: "",
      price: "",
      oldPrice: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', maxWidth: '300px' }}>
      <h2>Thêm sản phẩm</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required /><br />
      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Nam">Nam</option>
        <option value="Nu">Nữ</option>
      </select><br />
      <input name="code" placeholder="Code" value={formData.code} onChange={handleChange} /><br />
      <input name="image" type="file" onChange={handleChange} /><br />
      <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} /><br />
      <input name="oldPrice" type="number" placeholder="Old Price" value={formData.oldPrice} onChange={handleChange} /><br />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProductForm;
