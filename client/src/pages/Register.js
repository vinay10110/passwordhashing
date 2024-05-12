import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom';
const Register = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    async function register(ev){
        ev.preventDefault();
        const response=await fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/register`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
          })
          console.log(response);
          if (response.status === 200) {
            alert('Registration Successfull');
          } else {
            alert('Please enter valid credntials');
          }
          if(response.ok){
            return <Navigate to={'/login'} />
          }
    }
  return (
    <div className="container">
    <form className='container-box' onSubmit={register}>
      <h1>Register</h1>
      <div>
        <input type="text" placeholder='Username' value={username} onChange={ev=>setUsername(ev.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={ev=>setPassword(ev.target.value)} />
        </div>
        <button type='submit' className="container-button">Submit</button>
          <p>Already a member? <Link to='/login'><b>Login</b></Link></p>
    </form>
  
</div>
  )
}

export default Register;

