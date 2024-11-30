import React, { useState } from 'react';
import "./loginSignUpStyle.css";
import Logo from "./logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Check if both fields are filled
    if (email && password) {
      // Proceed to the Dashboard page if all fields are filled
      navigate('/Dashboard');
    } else {
      alert('Please fill out both fields');
    }
  };

  return (
    <div className='w-[100vw] min-h-screen bg-background-blue flex flex-col items-center justify-center gap-[20px]'>
      <img src={Logo} alt="Logo" className="w-[80px]" />
      <div className="bg-login flex flex-col gap-[5px] px-[20px] items-center justify-center py-[10px] rounded-[10px]">
        <h2 className='text-white'>Login</h2>
        <form id="loginForm" className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className='input bg-input-color'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              className='input bg-input-color'
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn w-[100%] h-[45px] bg-blue-500 flex justify-center items-center rounded-[5px]"
          >
            Login
          </button>
          <Link to="/Signup" className="link text-blue-500">Don't have an account? Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
