import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductItem = ({product}) => {

    const [quantity,setQuantity]=useState(1);
    const token = localStorage.getItem("token");


    const addToCartHandler = async (product) => {
        // setQuantity((previousState)=>previousState+1);
        console.log(product.id,quantity);
        try {
            const item = {
                productId: product.id,
                quantity,
            }
            
            const response = await axios.post(`http://localhost:8080/cart/add?token=${token}`,item);
            console.log(response);
            alert("Product have been added successfully");
        } catch (error) {
            console.log(error);
        }
      }
    

    

    return(

        <div class="col">
                  <div class="card shadow-sm">
                    <div class="card">
                        <img src={product.imageURL} alt="product-pic"/> 
                    </div>
                    
                    <div class="card-body">
                      <strong class="d-inline-block mb-2 text-primary" > {product.name}</strong> <br></br>
                      <p class="card-text"> {product.description } </p>
                      <strong class="btn btn-outline-secondary"> $ {product.price} </strong> <br></br>

                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group gap-5">
                          <div>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=> quantity > 1 && setQuantity((p)=>p-1)}>-</button>
                        <span class="btn btn-sm btn-outline-secondary m-2">{quantity}</span>
                        <button type="button" class="btn btn-sm btn-outline-secondary" onClick={()=>setQuantity((p)=>p+1)}>+</button>
                        </div>  
                        </div>
                        <button type="button" class="btn btn-sm btn-outline-success" onClick={()=>addToCartHandler(product)}>Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
    );
}

export default ProductItem;