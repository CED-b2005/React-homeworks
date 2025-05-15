import ProductCard from "../components/ProductCard";

function Home({ products }) {
  const menProducts = products.filter(p => p.category === "Nam");
  const womenProducts = products.filter(p => p.category === "Nu");

  return (
    <div>
      <h2>THỜI TRANG NAM</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {menProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>

      <h2>THỜI TRANG NỮ</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {womenProducts.map((p, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
