import React, { useState } from 'react';

export function Dientich() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    setArea(length * width);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tính diện tích hình chữ nhật</h2>

      <div>
        <label>Chiều dài: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Chiều rộng: </label>
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </div>

      <button onClick={calculateArea}>Tính diện tích</button>

      <h3>Diện tích: {area}</h3>
    </div>
  );
}
