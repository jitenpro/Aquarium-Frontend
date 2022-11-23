import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../api/ProductItem';

const Products = () => {

  const [products,setProducts]=useState([]);


  useEffect(()=>{
      loadProducts();

  },[]);

  const loadProducts=async ()=>{
      const result=await axios.get("http://localhost:8080/product/");
      setProducts(result.data);
  }






    return (
      
      <div class="album py-5 bg-light">
        <br class="my-4"/>
        <br class="my-4"/>
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      
      { 
          products.map((product,index)=>{

          return(
            <ProductItem key={index} product={product}/>

              // <div class="col">
              //     <div class="card shadow-sm">
              //       <div class="card">
              //           <img src={product.imageURL} alt="product-pic"/> 
              //       </div>
                    
              //       <div class="card-body">
              //         <p> {product.name}</p>
              //         <p class="card-text"> {product.description } </p>
              //         <div class="d-flex justify-content-between align-items-center">
              //           <div class="btn-group">
              //             <div>
              //           <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> quantity > 1 && setQuantity((p)=>p-1)}>-</button>
              //           <span>{quantity}</span>
              //           <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>setQuantity((p)=>p+1)}>+</button>
              //           </div>
              //             <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>addToCartHandler(product)}>Add To Cart</button>
                          
              //           </div>
              //           <small class="text-muted">9 mins</small>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
          )})
      }


        
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


    );
  };
  
export default Products;