import React from 'react'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="home-page" style={{paddingTop: '60px'}}>
     {/*  <h1></h1>
      <p>
     
      </p> */}
<Link to="/Signup"className='viewbook my-3 button'>View Books</Link>
    </div>
  )
}

export default Home