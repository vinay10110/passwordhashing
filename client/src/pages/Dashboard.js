import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div style={{textAlign:'center'}}>
    <h1>Welcome!</h1> 
    <Link to='/login'> <button className='container-button'>Logout</button></Link>
    </div>
  )
}

export default Dashboard
