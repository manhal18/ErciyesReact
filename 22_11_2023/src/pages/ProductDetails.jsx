import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true)


  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
          .then(res => { setProduct(res.data); setloading(false) })
          .catch(err => console.log(err))
    }, []);

    const navigate = useNavigate()
  
    return (
      <>
      {
        loading ? <h1>loading</h1> : <> 
        <h1>Product ID:{" "+product.id}</h1>
        <ul>
          <li>Name:{" "+product.name}</li>
          <li>Unit Price:{" "+product.unitPrice}</li>
          <li>Stock:{" "+product.unitsInStock}</li>
          <li>Category id:{" "+product?.categoryId}</li>
          <li>Unit On Order:{" "+product?.unitsOnOrder}</li>
          <li>supplier Id:{" "+product?.supplierId}</li>
        </ul>
        </>
      }
      <button onClick={() => navigate(-1)}>
          Go back
      </button>
      </>
    )
  }

