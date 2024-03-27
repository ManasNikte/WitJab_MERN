import React, { useState } from 'react'
import '../styles/Login.css'
import bagImg from '../assets/images/bag6.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'; // Added Axios import
const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const {token} = useParams()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:5001/auth/reset-password/"+token, {
            password,
        })
        .then(response => {
            if(response.data.status){
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
          <h2>Reset Password</h2>
          <p>
            Set your new <span className="name">password</span>
          </p>
          <form onSubmit={handleSubmit}>
          <div className="inputBox">
              <input type="password" htmlFor="password" placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)} />          
          </div><br />
          <div className="inputBox">

            <input type="submit" value="Reset" id="btn" />
          </div><br />
          </form>
        </div>
      </section>
  )
}

export default ResetPassword