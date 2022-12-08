import React from 'react'
import { Link } from 'react'

function Navbar() {
  return (
    <nav>

      <Link to="/">All Reviews</Link>
      <br />
      <Link to="reviews/new">Create a New Review</Link>
      
    </nav>
   
  )

}

export default Navbar