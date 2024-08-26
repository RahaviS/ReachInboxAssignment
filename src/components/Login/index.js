import {Link} from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import './index.css'

const Login = () => {
  return (
      <div className='bg-container'>
      <nav className='nav-container'>
        <img src="https://res.cloudinary.com/dktojjeva/image/upload/v1724486590/Logo_12_nwfmqd.png" alt="reach-inbox-logo" className='logo-img'/>
      </nav>
        <div className="login-page">
          <div className='login-contents'>
            <h1 className='page-title'>Create a new account</h1>
            {/* <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/onebox"
            className='nav-link'> */}
            <Link to="https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-inbox-assignment-ochre.vercel.app/onebox"
            className='nav-link'>
            <button className='custom-sign-in-btn'>
              <div className='btn-contents'><FcGoogle size={20}/> <p className='btn-text'>Sign Up with Google</p></div>
            </button></Link>
            <button type="button" className='login-btn'>Create an Account</button>
            <p className='desc-text'>Already have an account? Sign In</p>
          </div>
        </div>
        <footer className='footer'>
           <p className='footer-text'>© 2023 Reachinbox. All rights reserved.</p>
        </footer>
      </div>
  )
}
export default Login
