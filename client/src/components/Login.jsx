import { React, useState } from "react";
import '../styles/Login.css'
import bagImg from '../assets/images/bag6.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5001/auth/login', {
      email, 
      password
    }).then((response) => {
      if(response.data.status){
        navigate('/dashboard')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
      <section>
        <div className="leaves"></div>
        {/* <img src="had.jpg" className="bg" /> */}
        <img src={bagImg} className="bg" />

        <div className="login">
          <h2>Sign In</h2>
          <p>
            Sign in to <span className="name">WitJab</span>
          </p>
          <form onSubmit={handleSubmit}>
          <div className="inputBox">
              <input type="email" htmlFor="email" placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} />          
          </div><br />
          <div className="inputBox">
            <input type="password" htmlFor="password" placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} /> 
          </div><br />
          <div className="inputBox">
            <input type="submit" value="Login" id="btn" />
          </div><br />
          <p>Don't have an account? <Link to="/register">Register</Link></p><br />
          <p><Link to="/forgotPassword">Forgot Password?</Link></p><br />
          <p>Back to <Link to="/">Home</Link></p>
          </form>
        </div>
      </section>
  );
};

export default Login;