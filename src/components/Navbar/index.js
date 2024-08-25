import { MdOutlineDarkMode,MdOutlineLightMode  } from "react-icons/md";
import './index.css'

const Navbar =()=>{
  return (
    <nav className='top-nav-container'>
        <p className="top-nav-text">Onebox</p>
        <div className="top-left-section">
        <div className='theme-section'>
           <MdOutlineDarkMode/>
           <MdOutlineLightMode />
        </div>
        <p>Tim's Workspace</p>
        </div>
    </nav>
  )
}
export default Navbar