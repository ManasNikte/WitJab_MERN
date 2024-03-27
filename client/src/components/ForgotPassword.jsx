import React, { useState } from 'react'
import '../styles/Login.css'
import bagImg from '../assets/images/bag6.jpg'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'; // Added Axios import
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5001/auth/forgot-password', {
            email
        })
        .then(response => {
            if(response.data.status){
                alert("Check your email for password reset link");
                navigate('/login'); // Changed from Link to Navigate
            }
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        });
    };
    
  return (
    <section>
        <div className="leaves"></div>
        <img src={bagImg} className="bg" />

        <div className="login">
          <h2>Forgot Password</h2>
          <p>
            Reset your <span className="name">password</span>
          </p>
          <form onSubmit={handleSubmit}>
          <div className="inputBox">
              <input type="email" htmlFor="email" placeholder="Email"
              onChange={(e) => setEmail(e.target.value)} />          
          </div><br />
          <div className="inputBox">

            <input type="submit" value="Send" id="btn" />
          </div><br />
          </form>
        </div>
      </section>
  )
}

export default ForgotPassword