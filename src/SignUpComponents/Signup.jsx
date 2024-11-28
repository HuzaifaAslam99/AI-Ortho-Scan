import React from 'react'
import Logo from './logo.png'
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='w-[100vw] min-h-screen bg-background-blue flex flex-col items-center justify-center gap-[20px]'>
      <img src={Logo} alt="" className="w-[80px]"/>
      {/* <di className='w-[200px] h-[200px] bg-SignLogin-gray rounded-[10px]'> */}

      <div className=" bg-login  flex flex-col gap-[5px] px-[20px] items-center justify-center py-[10px] rounded-[10px]">
            <h2 className='text-white'>Sign Up</h2>
            <form className='flex flex-col gap-[10px]'>
                <div className="input-field">
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id="full-name" placeholder="Enter your name" required className='input bg-input-color'/>
                </div>
                <div className="input-field">
                    <label htmlFor="cnic">CNIC</label>
                    <input type="text" id="cnic" placeholder="Enter your cnic" required className='input bg-input-color' />
                </div>
                <div className="input-field">
                    <label htmlFor="signup-email">Email</label>
                    <input type="email" id="signup-email" placeholder="Enter your email" required className='input bg-input-color'/>
                </div>
                <div className="input-field">
                    <label htmlFor="signup-password">Password</label>
                    <input type="password" id="signup-password" placeholder="Enter your password" required className='input bg-input-color'/>
                </div>
                <div className="input-field">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" required className='input bg-input-color'/>
                </div>
                <Link to="/Dashboard" className="btn w-[100%] h-[45px] bg-blue-500 flex justify-center items-center rounded-[5px]" type="submit">Sign Up</Link>
                <Link to="/" className="link text-blue-500 " href="#switch-to-login"  >Already have an account? Login</Link>
            </form>
        </div>

    </div>
  )
}

export default Signup
