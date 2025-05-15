function ProductCard({ product }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
        <h4>{product.name}</h4>
        <p>{product.code}</p>
        {product.image && <img src={product.image} alt={product.name} width="100" />}
        <p style={{ color: 'red' }}>
          {product.price} đ <del style={{ color: 'gray' }}>{product.oldPrice} đ</del>
        </p>
        <button style={{ backgroundColor: 'orange', border: 'none', padding: '5px' }}>Đặt mua</button>
      </div>
    );
  }
  
  export default ProductCard;
  