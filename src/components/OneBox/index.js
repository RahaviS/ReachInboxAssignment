import { FiHome } from "react-icons/fi"
import { MdPersonSearch ,MdEmail,MdBarChart  } from "react-icons/md"
import { IoIosSend} from "react-icons/io"
import { TfiMenuAlt } from "react-icons/tfi"
import { FaInbox } from "react-icons/fa"
import { useState,useEffect, useContext } from 'react'
import Navbar from '../Navbar'
import NavMenu from '../NavMenu'
import PageContents from '../PageContents'
import ThemeContext from "../../context/ThemeContext"
import './index.css'

const navMenus=[
    {icon:<FiHome color="#AEAEAE" size={25}/>,id:'Home'},
    {icon:<MdPersonSearch color="#AEAEAE" size={25}/>,id:'Search'},
    {icon:<MdEmail color="#AEAEAE" size={25}/>,id:'Mail'},
    {icon:<IoIosSend color="#AEAEAE" size={25}/>,id:'Send'},
    {icon:<TfiMenuAlt color="#AEAEAE" size={25}/>,id:'Menu'},
    {icon:<FaInbox color="#AEAEAE" size={25}/>,id:'Inbox'},
    {icon:<MdBarChart color="#AEAEAE" size={25}/>,id:'Bar'}
    ];

const OneBox = () => {
    const [navMenu,setNavMenu]=useState([])
    const [selectedMenu,setSelectedMenu]=useState(navMenus[0].id)
    const [profile,setProfile]=useState('')
    const {isDark} = useContext(ThemeContext)

   useEffect(()=>{
    const firstName = localStorage.getItem('first_name')
    const LastName = localStorage.getItem('last_name');
    if(firstName&&LastName){
    const initials = firstName[0]+LastName[0]
    setProfile(initials) 
    }
   },[])

    useEffect(()=>{
        setNavMenu(navMenus)
    },[])

    const setMenu=(id)=>{
       setSelectedMenu(id)
    }
   
  return (
    <div className="onebox-page-container">
        <nav className={`primary-nav ${isDark?'nav-dark-bg':'nav-light-bg'}`}>
          <div>
            <img src="https://res.cloudinary.com/dktojjeva/image/upload/v1724509056/Logo_chckph.png" alt="primary-logo" className='primary-nav-logo'/>
          </div>
          <ul className='nav-menus'>
            {navMenu.map(each=>(
              <NavMenu key={each.id} navDetails={each} setMenu={setMenu} activeMenu={selectedMenu===each.id}/>
            ))
            }
         </ul>
         <div className='profile'>{profile}</div>
        </nav>
        <div className="contents-container">
          <Navbar/>
          <PageContents selectedMenu={selectedMenu} />
        </div>
    </div>
  )
}
export default OneBox
