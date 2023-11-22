import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Products() {
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

  function stock(){
    axios.get("https://northwind.vercel.app/api/products")
          .then(res => { setProducts(res.data.filter(item => item.unitsInStock < 5)) })
  }

  function all(){
    axios.get("https://northwind.vercel.app/api/products")
          .then(res => { setProducts(res.data) })
  }

  function cheap(){
    axios.get("https://northwind.vercel.app/api/products")
          .then(res => { setProducts(res.data.filter(item => item.unitPrice < 20)) })
  }

  function expensive(){
    axios.get("https://northwind.vercel.app/api/products")
          .then(res => { setProducts(res.data.filter(item => item.unitPrice > 100)) })
  }
  return (
    <>
      <div>
        <button onClick={stock}>show critic stock</button>
        <button onClick={all}>show all</button>
        <button onClick={cheap}>show cheap</button>
        <button onClick={expensive}>show expensive</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th style={{width:"250px"}}>Name</th>
              <th>Unit Price</th>
              <th>Stock</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((item) =>
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td style={{width:"250px"}}>{item.name}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.unitsInStock}</td>
                  <td><button onClick={() => deleteProduct(item.id)}>delete</button></td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

