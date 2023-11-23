import axios from 'axios';
import { useEffect, useState } from 'react'

const Posts = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => { setUsers(res.data); })
  }, []);

  function postsFilter(e){
    if(e.target.value !== 0){
      axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(res => { setPosts(res.data.filter(item => item.userId == e.target.value)) })
    }
  }

  return (
    <>
      <label>Choose a user:</label>

      <select onChange={postsFilter}>
        <option value="0">select</option>
        {
          users.map((item) =>
            <option key={item.id} value={item.id}>{item.name}</option>)
        }
      </select> 
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th style={{width: "250px"}}>Title</th>
            <th style={{width: "400px"}}>Body</th>
          </tr>
        </thead>
        <tbody>
        {
          posts.map((item) => 
            <tr key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr> 
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default Posts