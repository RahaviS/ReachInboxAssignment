import { MdOutlineDarkMode,MdOutlineLightMode  } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import ThemeContext from "../../context/ThemeContext";
import { useContext } from "react";
import './index.css'

const Navbar =()=>{
  const {isDark,toggleTheme}=useContext(ThemeContext)

  const handleClick=()=>{
    toggleTheme()
  }
  return (
    <nav className={`top-nav-container ${isDark?'dark':'light'}`}>
        <p className="top-nav-text">Onebox</p>
        <div className="top-left-section">
        <div className={`theme-section ${!isDark&&'light-bg'}`}>
            {isDark?(
              <button type="button" className="theme-btn" onClick={handleClick}>
                <FaCircle color="#888686"/>
                <MdOutlineLightMode color="#E8C364"/>  
              </button>):(
              <button type="button" className="theme-btn" onClick={handleClick}>  
               <MdOutlineDarkMode color="#E8C364"/>  
               <FaCircle color="#FFFFFF"/>
              </button>)}
         </div>
        <p className="name-text">Tim's Workspace</p>
        </div>
    </nav>
  )
}
export default Navbar