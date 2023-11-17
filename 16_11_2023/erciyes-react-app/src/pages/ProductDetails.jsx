import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../components/NotFound';

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [status, setStatus] = useState(0);


  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
          .then(res => { setProduct(res.data); setStatus(res.status); })
          .catch(err => console.log(err))
  }, []);
  
  if(status === 200){
    return (
      <>
        <h1>Product ID:{" "+product.id}</h1>
        <ul>
          <li>Name:{" "+product.name}</li>
          <li>Unit Price:{" "+product.unitPrice}</li>
          <li>Stock:{" "+product.unitsInStock}</li>
        </ul>
      </>
    )
  }else{
    return(
      <NotFound />
    )
  }
}

