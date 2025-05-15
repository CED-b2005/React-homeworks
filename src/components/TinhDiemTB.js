import React from 'react';

class TinhDiemTB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diemLy: '',
      diemToan: '',
      diemTB: null,
      xepLoai: '',
    };
  }

  myChangeHandler = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    this.setState({ [name]: val });
  };

  tinhDiem = (event) => {
    event.preventDefault();

    const { diemLy, diemToan } = this.state;
    const ly = parseFloat(diemLy);
    const toan = parseFloat(diemToan);

    const diemTB = (ly + toan) / 2;
    let xepLoai = '';

    if (diemTB >= 8) xepLoai = 'Giỏi';
    else if (diemTB >= 6.5) xepLoai = 'Khá';
    else if (diemTB >= 5) xepLoai = 'Trung Bình';
    else xepLoai = 'Yếu';

    this.setState({ diemTB, xepLoai });
  };

  render() {
    return (
      <form onSubmit={this.tinhDiem}>
        <h1>Tính Điểm Trung Bình</h1>
        <p>Điểm Lý:</p>
        <input
          name="diemLy"
          value={this.state.diemLy}
          onChange={this.myChangeHandler}
        />
        <p>Điểm Toán:</p>
        <input
          name="diemToan"
          value={this.state.diemToan}
          onChange={this.myChangeHandler}
        />
        <br />
        <br />
        <button type="submit">Tính điểm</button>

        {this.state.diemTB !== null && (
          <div>
            <h2>Điểm Trung Bình: {this.state.diemTB}</h2>
            <h2>Xếp Loại: {this.state.xepLoai}</h2>
          </div>
        )}
      </form>
    );
  }
}

export default TinhDiemTB;
