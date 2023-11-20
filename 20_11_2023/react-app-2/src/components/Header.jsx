import React from 'react'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <nav>
      <Link to="/">DivEx</Link>
      <Link to="/numbers-list">Numbers List</Link>
      <Link to="/products">Products</Link>
    </nav>
  )
}

