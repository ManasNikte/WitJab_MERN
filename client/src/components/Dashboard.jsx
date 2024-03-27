import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:5001/auth/verify')
    .then(res => {
      if(res.data.status){

      } else {
        navigate('/')
      }
    })
  }, [])
  const handleLogout = () => {
    axios.get('http://localhost:5001/auth/logout')
    .then(res => {
      if(res.data.status) {
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard