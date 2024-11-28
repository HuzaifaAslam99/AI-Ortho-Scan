
import React from 'react';
import "./loginSignUpStyle.css"
import Logo from "./logo.png"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="card login-card">
            <h2>Login</h2>
            <form id="loginForm">
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <Link to="/"  className="btn" type="submit">Login</Link>
                <Link to="/Signup"  className="link" href="#switch-to-signup">Don't have an account? Sign Up</Link>
            </form>
        </div>
    </div>
  );
};

export default Login;

