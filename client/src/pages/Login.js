import React,{useState} from 'react'
import '../App.css';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect]=useState(false);
    async function login(ev){
        ev.preventDefault();
        const response=await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
          })
          console.log(response);
          if (response.status === 200) {
            setRedirect(true);
          } else {
            alert('Invalid Credentials');
          }
          
    }
    if(redirect){
      return <Navigate to='/dashboard' />
    }
  return (
    <div className="container">
        <form className='container-box' onSubmit={login}>
          <h1>Login</h1>
          <div>
            <input type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={ev=>setPassword(ev.target.value)} />
            </div>
            <button type='submit' className='container-button'>Submit</button>
             <p>Not a member? <Link to='/register'><b>Register</b></Link> </p>
        </form>
      
    </div>
  )
}

export default Login
