import React, { useState, useEffect } from 'react';
import defaultData from './Data';
import ProductForm from './components/ProductForm';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    } else {
      setProducts(defaultData);
      localStorage.setItem('products', JSON.stringify(defaultData));
    }
  }, []);

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setActiveTab('home'); // Quay lại trang home sau khi thêm
  };

  const mensProducts = products.filter(product => product.category === 'Nam');
  const womensProducts = products.filter(product => product.category === 'Nu' || product.category === 'Nữ');

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{ background: '#333', padding: '10px' }}>
        <button onClick={() => setActiveTab('home')} style={{ marginRight: '10px', color: 'white' }}>Home</button>
        <button onClick={() => setActiveTab('add')} style={{ color: 'white' }}>Add</button>
      </nav>

      {activeTab === 'home' && (
        <div style={{ padding: '20px' }}>
          <h2>THỜI TRANG NAM</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {mensProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          <h2 style={{ marginTop: '40px' }}>THỜI TRANG NỮ</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {womensProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'add' && (
        <ProductForm onAdd={handleAddProduct} />
      )}
    </div>
  );
}

export default App;
