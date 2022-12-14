import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {

  const token = localStorage.getItem("token");

  const [cartItems,setCartItems]=useState([]);
  const [totalCost,setTotalCost]=useState([]);


  useEffect(()=>{
      loadCarts();

  },[]);

  const loadCarts=async ()=>{
      const result=await axios.get(`http://localhost:8080/cart/?token=${token}`);
      setCartItems(result.data.cartItems);
      setTotalCost(result.data.totalCost);

  }

  const deleteFromCart = async (cartItem) => {
      try {
          await axios.delete(`http://localhost:8080/cart/delete/${cartItem.id}?token=${token}`);
          const newCart = cartItems.filter((item) => item.id !== cartItem.id);
          setCartItems(newCart);

          const newresult =await axios.get(`http://localhost:8080/cart/?token=${token}`);
          setTotalCost(newresult.data.totalCost);

          alert("Product have been removed...");

      } catch (error) {
        console.log(error);
      }
  }

  const placeOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/order/add?token=${token}&sessionId`);
      console.log(response);

      alert("Order have been placed..");
  } catch (error) {
      console.log(error);
  }
  }


  return (
    
    <div class="album py-5 bg-light">
        <br class="my-4"/>
        <br class="my-4"/>
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
       { 
          cartItems.map((cartItem)=>{

          return(

            <div class="col-md-6">
              <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  
                  <h3 class="d-inline-block mb-2 text-primary">Product Name : {cartItem.product.name}</h3>
                  <br class="my-2"/>
                  <strong class="mb-0">Price : {cartItem.product.price}</strong>
                  <br class="my-2"/>
                  <strong class="mb-0">Quantity : {cartItem.quantity}</strong>
                  <br class="my-2"/>

                  <button type="button" class="btn btn-sm btn-danger" onClick={()=>deleteFromCart(cartItem)}>Remove</button>
                          
                </div>
                <div class="col-auto d-none d-lg-block">
                    <img class="bd-placeholder-img" width="200" height="250" src={cartItem.product.imageURL} alt=""/>

                </div>
              </div>
            </div>
              
           )})}

              
              </div>

              <div>
              <br class="my-4"/>
              {/* <strong class="mb-0">Total Cost : {totalCost}</strong><div class="col"> */}
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Total Cost</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$ {totalCost}</h1>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={()=>placeOrder()}>Place Order</button>
          </div>
        </div>
      </div>

                  {/* <div class="col-md-6">
                      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                          <strong class="d-inline-block mb-2 text-primary">Product Name</strong>
                          <h3 class="mb-0">Price</h3>
                          <div class="mb-1 text-muted">Nov 12</div>
                          <p class="card-text mb-auto">Product Details : This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                          <a href="/Cart" class="stretchedLink">Total</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                      </div>
                    </div> */}

      </div>
    </div>

  );
};

export default Services;