import { MdEmail  } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import ThemeContext from '../../context/ThemeContext'
import {useState,useEffect,useContext} from 'react';
import './index.css'

const ThirdColumn=()=>{
  const[name,setName]=useState('')
  const [mail,setMail]=useState('')
  const {isDark}=useContext(ThemeContext)

  useEffect(()=>{
    const firstName = localStorage.getItem('first_name')
    const LastName = localStorage.getItem('last_name');
    const email = localStorage.getItem('email');
    if(firstName&&LastName){ 
    setName(firstName)
    setMail(email) 
    }
    //eslint-disable-next-line
   },[name])

return(
<div className='third-section'>
<div className={`details ${isDark?'details-dark':'details-light'}`}>
  <p>Lead Details</p> 
</div>
<div className='contact-details'>
  <div className='contact'>
    <p className={`${isDark?'about-dark':'about-light'}`}>Name</p>
    <p className={`${isDark?'contact-dark':'contact-light'}`}>{name}</p>
  </div>
  <div className='contact'>
    <p className={`${isDark?'about-dark':'about-light'}`}>Contact No</p>
    <p className={`${isDark?'contact-dark':'contact-light'}`}>+71 8135415265</p>
  </div>
  <div className='contact'>
    <p className={`${isDark?'about-dark':'about-light'}`}>Email ID</p>
    <p className={`${isDark?'contact-dark':'contact-light'}`}>{mail}</p>
  </div>
  <div className='contact'>
    <p className={`${isDark?'about-dark':'about-light'}`}>Linkedin</p>
    <p className={`${isDark?'contact-dark':'contact-light'}`}>linkedin.com/in/rahavi-sekar</p>
  </div>
  <div className='contact'>
    <p className={`${isDark?'about-dark':'about-light'}`}>Company Name</p>
    <p className={`${isDark?'contact-dark':'contact-light'}`}>Reach Inbox</p>
  </div>
</div>
<div className={`details ${isDark?'details-dark':'details-light'}`}>
  <p>Activities</p>
  </div>
<div className='campaign-details'>
  <p className="campaign-name-text">Campaign Name</p>
  <p className='text'>3 Steps |  5 Days in sequence</p>
  <div className='campaign-mail'>
    <div className={`mail-icon ${isDark?'mail-icon-dark':'mail-icon-light'}`}>
      <MdEmail color={`${isDark?'#CCCCCC':'#181818'}`}/>
    </div>
    <div>
      <p>Step 1: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>
  <div className='campaign-mail'>
    <div className={`mail-icon ${isDark?'mail-icon-dark':'mail-icon-light'}`}>
      <MdEmail color={`${isDark?'#CCCCCC':'#181818'}`}/>
    </div>
    <div>
      <p>Step 2: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>
  <div className='campaign-mail'>
    <div className={`mail-icon ${isDark?'mail-icon-dark':'mail-icon-light'}`}>
      <MdEmail color={`${isDark?'#CCCCCC':'#181818'}`}/>
    </div>
    <div>
      <p>Step 3: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>

</div>
</div>
)
}

export default ThirdColumn