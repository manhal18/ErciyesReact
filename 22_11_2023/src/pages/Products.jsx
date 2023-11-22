import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products")
          .then(res => { setProducts(res.data) })
  }, []);

  function deleteProduct(id){
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
          .then(setProducts(
            products.filter(item =>
              item.id !== id
            )))
  }
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th style={{width: "200px"}}>Name</th>
            <th>Unit Price</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          products.map((item) => 
            <tr key={item.id}>
              <td><Link to={`/products/${item.id}`}>{item.id}</Link></td>
              <td style={{width: "300px"}}>{item.name}</td>
              <td>{item.unitPrice}</td>
              <td>{item.unitsInStock}</td>
              <td><button onClick={() => deleteProduct(item.id)}>delete</button></td>
            </tr> 
          )
        }
        </tbody>
      </table>
    </>
  )
}

