import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-page">
     {/*  <h1></h1>
      <p>
     
      </p> */}
<Link to="/Books"className='viewbook my-3 button'>View Books</Link>
    </div>
  )
}

export default Home