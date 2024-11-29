
import React from 'react';
import "./loginSignUpStyle.css"
import Logo from "./logo.png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-[100vw] min-h-screen bg-background-blue flex flex-col items-center justify-center gap-[20px]'>
        <img src={Logo} alt="logo" className="w-[80px]" />
        <div className=" bg-login flex flex-col gap-[5px] px-[20px] items-center justify-center py-[10px] rounded-[10px]">
            <h2 className='text-white'>Login</h2>
            <form id="loginForm" className='flex flex-col gap-[10px]'>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required  className='input bg-input-color' />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required  className='input bg-input-color' />
                </div>
                <Link to="/Dashboard"  className="btn w-[100%] h-[45px] bg-blue-500 flex justify-center items-center rounded-[5px]" type="submit">Login</Link>
                <Link to="/Signup"  className="link text-blue-500 " href="#switch-to-signup">Don't have an account? Sign Up</Link>
            </form>
        </div>
    </div>
  );
};

export default Login;


/* <div className="input-field">
<label htmlFor="signup-password">Password</label>
<input type="password" id="signup-password" placeholder="Enter your password" required className='input bg-input-color'/>
</div> */