import './App.css';
import { Dientich } from '../Dientich';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import LeftContent from '../content/LeftContent';
import RightContent from '../content/RightContent';
import Form from '../Form';
import TinhDiemTB from '../TinhDiemTB';
import AddProduct from '../AddProduct';
import Menu from '../Menu';

function App() {
  return (
    <div id="container">
      {/* <Menu></Menu> */}
      <AddProduct></AddProduct>
      {/* <TinhDiemTB></TinhDiemTB> */}
      {/* <Form></Form> */}
      {/* <Header></Header>
      <div id="content">
        <LeftContent></LeftContent>
        <RightContent></RightContent>
        <div style={{ clear: 'both' }} />
      </div>
      <Footer></Footer> */}
      {/* <State></State> */}
      {/* <Dientich></Dientich> */}
    </div>
  );
}

// import React, { Component } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       field: {
//         name: 'Ka Phu Dong',
//         email: 'kaphudong04@gmail.com',
//       },
//     };
//   }
// }

export default App;
