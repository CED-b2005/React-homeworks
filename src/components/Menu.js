import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [menu] = useState([
    { id: 1, name: 'Phở bò', price: 40000 },
    { id: 2, name: 'Bánh mì', price: 20000 },
    { id: 3, name: 'Cơm tấm', price: 50000 },
    { id: 4, name: 'Hủ tiếu', price: 35000 },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [money, setMoney] = useState('');
  const [total, setTotal] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleOrder = () => {
    const selectedFoods = menu.filter((item) =>
      selectedItems.includes(item.id)
    );
    const totalPrice = selectedFoods.reduce((sum, item) => sum + item.price, 0);

    setTotal(totalPrice);

    if (money >= totalPrice) {
      setRemaining(money - totalPrice);
      setErrorMessage('');
    } else {
      setRemaining(0);
      setErrorMessage('Số tiền hiện tại không đủ');
    }
  };

  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className="menu-list">
        {menu.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
            {item.name} - {item.price.toLocaleString()}đ
          </label>
        ))}
      </div>

      <div className="order-section">
        <input
          type="number"
          placeholder="Nhập số tiền hiện có"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
        />
        <button onClick={handleOrder}>Đặt hàng</button>
      </div>

      <div className="result-section">
        <h3>Kết quả:</h3>
        <p>
          <strong>Tổng tiền món đã chọn:</strong> {total.toLocaleString()}đ
        </p>
        <p>
          <strong>Tiền dư còn lại:</strong> {remaining.toLocaleString()}đ
        </p>
        {errorMessage && (
          <p style={{ color: 'red' }}>{errorMessage}</p> // chỉ thêm dòng đỏ báo lỗi
        )}
      </div>
    </div>
  );
};

export default Menu;
