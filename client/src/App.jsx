import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Team from './components/Team.jsx';
import Services from './components/Services.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs.jsx';
import Careers from './components/Careers.jsx';
import Dashboard from './components/Dashboard.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <About />
              <Services />
              <Portfolio />
              <Team />
              <ContactForm />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
