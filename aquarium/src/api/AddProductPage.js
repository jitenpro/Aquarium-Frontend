import React, { useState } from "react";
import axios from 'axios'
import { Form } from "semantic-ui-react";
import { Link,useNavigate } from "react-router-dom";


const AddProductPage = () => {

  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price,setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [imageURL, setImageURL] = useState();

  const saveProduct= (e)=>{
    e.preventDefault();
      let product = {
        name:name,
        categoryId:categoryId, 
        description:description,
        price:price,
        imageURL:imageURL
      }
      
      axios.post("http://localhost:8080/product/add",product).catch(err=>console.log(err))
      console.log(product);
      alert("Product Added SucessFully")
      navigate('/Products')
  }

  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {
      console.log(e.target.files[0]);
      console.log(oFREvent.target.result);
      setImageURL(oFREvent.target.result);
    };
    
  }


  return (
    <div className="bg-slate-100 m-auto flex flex-col items-center mt-24 justify-center w-1/2 drop-shadow-md ">

        <br class="my-4"/>
        <br class="my-4"/>
        <br class="my-4"/>
        <br class="my-4"/>
      <div className="d-flex justify-content-center" >
      <Form className="w-50 p-4" onSubmit={e=>saveProduct(e)}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            value={name}
            placeholder="Product Name"
            onChange={e=>setName(e.target.value)}
            
          />
          <Form.Input 
          fluid label="Price" 
          value={price}
          placeholder="price" onChange={e=>setPrice(e.target.value)}/>

          <Form.Input 
          fluid label="categoryId" 
          value={categoryId}
          placeholder="categoryId" onChange={e=>setCategoryId(e.target.value)}/>


        </Form.Group>
        <div className="p-2 border bg-slate-500 rounded-md text-white mb-4 cursor-pointer" maxHeight="500">
          <label htmlFor="uploadImage" className="cursor-pointer">
            Upload Product Image
          </label>
          <input
            type="file"
            onChange={(e) => PreviewImage(e)}
            name="uploadImage"
            id="uploadImage"
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="border w-full h-auto flex items-center justify-center p-4">
          {imageURL && (
            <img src={imageURL} alt="images"  className="w-25 h-auto" />
          )}
        </div>

        <Form.TextArea
          label="Product Discription"
          value={description}
          placeholder="Tell us more about you..."
          onChange={e=>setDescription(e.target.value)}
        />
        <div className="">
        <Form.Button>Submit</Form.Button>
        
        <Link to='/Products' className="p-2 rounded-sm border">Show All products</Link>
      </div>
      </Form>
      </div>
    </div>
  );
};

export default AddProductPage;
