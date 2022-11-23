import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/GoldFishBanner.jpg";

const Home = () => {

    return (

      <div class="px-5 pt-5 my-5 text-center border-bottom">
        <br class="my-4"/>
        <br class="my-4"/>
      <h1 class="display-4 fw-bold">Best Aquarium Solution</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
        India's one of largest online store for aquarium products. 
        Free & Express Delivery Pan India. Serving 1000+ customers.
        We have 150+ Products from over 10 International Brands.
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <Link to="/products">
          <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Products</button>
        </Link>
        <Link to="/Aboutus">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Aboutus</button>
        </Link>
        </div>
      </div>
      
      <div class="overflow-hidden" style={{ maxHeight : `60vh`} }>
        <div class="container px-5">
          <img src={logo} class="img-fluid border rounded-3 shadow-lg mb-4" alt="Hero aqua" width="840" height="600" loading="lazy"/>
        </div>
      </div>
    </div>

    );
  };
  
export default Home;