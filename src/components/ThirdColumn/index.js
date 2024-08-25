import { MdEmail  } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import './index.css'

const ThirdColumn=()=>{
return(
<div className='third-section'>
<div className='details'>
  <p>Lead Details</p> 
</div>
<div className='contact-details'>
  <div className='contact'>
    <p>Name</p>
    <p>Orlando</p>
  </div>
  <div className='contact'>
    <p>Contact No</p>
    <p>+54 9135415265</p>
  </div>
  <div className='contact'>
    <p>Email ID</p>
    <p>Orlando@gmail.com</p>
  </div>
  <div className='contact'>
    <p>Linkedin</p>
    <p>linkedin.com/in/timvadde</p>
  </div>
  <div className='contact'>
    <p>Company Name</p>
    <p>Reach Inbox</p>
  </div>
</div>
<div className='details'>
  <p>Activities</p>
</div>
<div className='campaign-details'>
  <p>Campaign Name</p>
  <p className='text'>3 Steps |  5 Days in sequence</p>
  <div className='campaign-mail'>
    <div className='mail-icon'>
      <MdEmail />
    </div>
    <div>
      <p>Step1: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>
  <div className='campaign-mail'>
    <div className='mail-icon'>
      <MdEmail />
    </div>
    <div>
      <p>Step1: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>
  <div className='campaign-mail'>
    <div className='mail-icon'>
      <MdEmail />
    </div>
    <div>
      <p>Step1: Email</p>
      <div className='sent'><IoIosSend/><p className='text'>Sent 3rd,Mar</p></div>
    </div>
  </div>
</div>
</div>
)
}

export default ThirdColumn