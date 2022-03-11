import logo from './logo.svg';
import './App.css';
import ShowProducts from './components/showproducts';
import Addproduct from './components/addproduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbarmenu from './components/navbar';
import Productdetail from './components/productdetail';
import Updateproduct from './components/updateproduct';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<ShowProducts />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/product" element={<Productdetail />} />
          <Route exact path="/update_product" element={<Updateproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
