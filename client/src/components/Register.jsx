import React, { useState } from "react";
import '../styles/Login.css'
import bagImg from '../assets/images/bag6.jpg'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:5001/auth/signup', {
      username, 
      email, 
      password
    }).then((response) => {
      if(response.data.status){
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <section>
      <div className="leaves"></div>
      <img src={bagImg} className="bg" />

      <div className="login">
        <h2>Register</h2>
        <p>
          Sign Up to <span className="name">WitJab</span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" htmlFor="username" placeholder="Username"
              onChange={(e) => setUsername(e.target.value)} />
          </div><br />
          <div className="inputBox">
            <input type="email" htmlFor="email" placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} />
          </div><br />
          <div className="inputBox">
            <input type="password" htmlFor="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
          </div><br />
          <div className="inputBox">
            <input type="submit" value="Sign Up" id="btn" />
          </div>
          <br />
          <p>Have an account?<Link to="/login">Login</Link></p>
          <br />
          <p>Back to <Link to="/">Home</Link></p>        
        </form>
      </div>
    </section>
  );
};

export default Register;