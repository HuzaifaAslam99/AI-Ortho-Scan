import React from 'react';
import Logo from './logo.png';
import { Link } from 'react-router-dom';

const Signup = () => {

  return (
    <div className='w-[100vw] min-h-screen bg-background-blue flex flex-col items-center justify-center gap-[20px]'>

      <img src={Logo} alt="Logo" className="w-[80px]" />

      <div className="bg-login flex flex-col gap-[5px] px-[20px] items-center justify-center py-[10px] rounded-[10px]">

        <h2 className='text-white'>Sign Up</h2>

        <form className='flex flex-col gap-[10px]' >

          <div className="input-field">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your name" className='input bg-input-color'/>
          </div>
          <div className="input-field">
            <label htmlFor="cnic">Age</label>
            <input type="number" id="cnic" placeholder="Enter your Age" className='input bg-input-color'/>
          </div>
          <div className="input-field">
            <label htmlFor="signup-email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className='input bg-input-color'/>
          </div>
          <div className="input-field">
            <label htmlFor="signup-password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className='input bg-input-color'/>
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm your password" className='input bg-input-color'/>
          </div>

          <button type="submit" className="btn w-[100%] h-[45px] bg-blue-500 flex justify-center items-center rounded-[5px]">
            Sign Up
          </button>

          <Link to="/" className="link text-blue-500">Already have an account? Login</Link>

        </form>
      </div>
    </div>
  );
};

export default Signup;
