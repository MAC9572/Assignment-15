import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetails(){

const [productDetails, setProductDetails] =useState({})
let {id} =useParams();


useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/' +id)
    .then(res=>{
        setProductDetails(res.data)
    })
},)

    return(
        <Container>
        <div>
      <img className ="product-image" src ={productDetails.image}/>
      <h2 className="title">{productDetails.title}</h2>
      <p className="product-desc">{productDetails.description}</p>
        </div>
        </Container>
    )
}

export default ProductDetails;