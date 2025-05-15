// import { Component } from "react";
import './App.css';
// import { useState } from 'react';
// import React, { Component } from 'react'

// import axios from 'axios';

// export default function App (){
//   constructor(props) {
//     super(props);
//     this.state = {
//       products: [],
//     };
//   }

//   // Gọi API sau khi component đã được mount vào DOM
//   componentDidMount() {
//     axios.get('http://127.0.0.1:8000/api/products')
//       .then(response => {
//         const products = response.data;
//         this.setState({ products }); // Cập nhật state với dữ liệu sản phẩm
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h1 style={{ textAlign: 'center', margin: '30px 0', color: '#333' }}>🛍️ Danh sách sản phẩm</h1>
//         <div className="product-list">
//           {this.state.products.map((product, index) => {
//             const primaryImage = product.images.find(img => img.is_primary === 1);
  
//             return (
//               <div key={index} className="product-card">
//                 {primaryImage && (
//                   <img src={primaryImage.image_url} alt={product.name} className="product-image" />
//                 )}
//                 <h2 className="product-name">{product.name}</h2>
//                 <p className="product-price">{product.price} VND</p>
//                 <p className="product-desc">{product.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }


// export default function App (){
// const [name, setName] = useState("");
// const [submittedName, setSubmittedName] = useState("");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   setSubmittedName(name);
//   setName(event.target.value);           
// };

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
//       </label>
//       <input type="submit" value="Submit" />
//     </form>

//     <h1>{submittedName}</h1>
//   </div>
// );
// }
  




// export default function App() {
//   const [inputs, setInputs] = useState({});
//   const [submitted, setSubmitted] = useState({});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInputs(values => ({ ...values, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitted(inputs);
//   };

//   const diemToan = Number(submitted.diemToan) || 0;
//   const diemLy = Number(submitted.diemLy) || 0;
//   const tongDiem = diemToan + diemLy ;
//   const diemTrungBinh = tongDiem / 2  ;

//   const xepLoai = () => {
//     if (diemTrungBinh >= 8) return "Giỏi";
//     if (diemTrungBinh >= 6.5) return "Khá";
//     if (diemTrungBinh >= 5) return "Trung bình";
//     return "Yếu";
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nhập điểm Toán:
//           <input 
//             type="number" 
//             name="diemToan" 
//             value={inputs.diemToan || ""} 
//             onChange={handleChange}
//           />
//         </label>
//         <br />

//         <label>
//           Nhập điểm Lý:
//           <input 
//             type="number" 
//             name="diemLy" 
//             value={inputs.diemLy || ""} 
//             onChange={handleChange}
//           />
//         </label>
//         <br />

//         <input type="submit" value="Submit" />
//       </form>   
      

//         <div>
//           <h1>Tổng điểm: {tongDiem}</h1>
//           <h1>Điểm trung bình: {diemTrungBinh.toFixed(2)}</h1>
//           <h1>Xếp loại: {xepLoai()}</h1>
//         </div>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  // 1. State cho inputs và danh sách sản phẩm
  const [inputs, setInputs] = useState({ name: '', price: '', image: '' });
  const [products, setProducts] = useState([]);

  // 2. Load danh sách từ sessionStorage khi component mount
  useEffect(() => {
    const saved = sessionStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    }
  }, []);

  // 3. Cập nhật inputs khi user nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  // 4. Xử lý submit: thêm sản phẩm, lưu sessionStorage, reset form
  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...products, inputs];
    setProducts(updated);
    sessionStorage.setItem('products', JSON.stringify(updated));
    setInputs({ name: '', price: '', image: '' });
  };

  return (
    <div className="container">
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên sản phẩm:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Giá (VND):</label>
          <input
            type="number"
            id="price"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Ảnh (URL):</label>
          <input
            type="url"
            id="image"
            name="image"
            value={inputs.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Thêm</button>
      </form>

      <h2>Danh sách sản phẩm đã nhập</h2>
      {products.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <ul className="product-list">
          {products.map((p, i) => (
            <li className="product-card" key={i}>
              <img
                className="product-image"
                src={p.image}
                alt={p.name}
                onError={e => { e.target.src = 'https://via.placeholder.com/180'; }}
              />
              <div className="product-info">
                <strong>{p.name}</strong>
                <span>{p.price} VND</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

