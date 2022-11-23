import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'

import Navbar from './Layouts/Navbar';
// import Footer from './Layouts/Footer';

import Home from './Pages/Home';
import Features from './Pages/Features';
import Products from './Pages/Products';
import Aboutus from './Pages/Aboutus';
import Cart from './Pages/Cart';

import Login from './Actions/Login';
import Register from './Actions/Register';
import AddProductPage from "./api/AddProductPage"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Features" element={<Features/>}></Route>
          <Route exact path="/Products" element={<Products/>}></Route>
          <Route exact path="/Aboutus" element={<Aboutus/>}></Route>

          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Register" element={<Register/>}></Route>
          <Route exact path="/AddProductPage" element={<AddProductPage/>}> </Route>
          <Route exact path="/Cart" element={<Cart/>}></Route>

        </Routes>
        
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
