import {useEffect, useState,useContext} from 'react';
import {IoMdClose} from "react-icons/io"
import { BsFillLightningFill } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { MdAttachment } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { PiBracketsAngleBold } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6"
import ThemeContext from "../../context/ThemeContext"
import './index.css'

const ReplyModal=(props)=>{
    const [mailBody,setMailBody]=useState({
      from:'',
      to:'',
      subject:'',
      body:''
    })
    const {isDark}=useContext(ThemeContext)

    const {closeReplyModal,mailDetails,onClickSend}=props
    const {fromEmail,toEmail}=mailDetails[0]
  
    const handleSendClick=()=>{
      onClickSend(mailBody)
    }

    useEffect(()=>{
      setMailBody({...mailBody,from:fromEmail,to:toEmail})
      //eslint-disable-next-line
    },[mailDetails])
   
    return(
   <div className={`modal-container ${isDark?'modal-container-dark':'modal-container-light'}`}>
    <div className={`modal-header ${isDark?'modal-header-dark':'modal-header-light'}`}>
        <p className={`reply-text ${isDark?'reply-text-dark':'reply-text-light'}`}>Reply</p>
        <button onClick={closeReplyModal} className="close-btn"><IoMdClose size={20} color={`${isDark?'#CCCCCC':'#181818'}`}/></button>
      </div>
      <div className="modal-body">
        <div className={`form-group ${isDark?'form-group-dark':'form-group-light'}`}>
          <label htmlFor="to" className={`label-text ${isDark?'label-text-dark':'label-text-light'}`}>To:</label>
          <input type="text" id="to" className={`form-control ${isDark?'form-control-dark':'form-control-light'}`} onChange={e=>setMailBody({...mailBody,to:e.target.value})} value={mailBody.to} />
        </div>
        <div className={`form-group ${isDark?'form-group-dark':'form-group-light'}`}>
          <label htmlFor="from" className={`label-text ${isDark?'label-text-dark':'label-text-light'}`}>From:</label>
          <input type="text" id="from" className={`form-control ${isDark?'form-control-dark':'form-control-light'}`} onChange={e=>setMailBody({...mailBody,from:e.target.value})} value={mailBody.from}/>
        </div>
        <div className={`form-group ${isDark?'form-group-dark':'form-group-light'}`}>
          <label htmlFor="subject" className={`label-text ${isDark?'label-text-dark':'label-text-light'}`}>Subject:</label>
          <input type="text" id="subject" className={`form-control ${isDark?'form-control-dark':'form-control-light'}`} onChange={e=>setMailBody({...mailBody,subject:e.target.value})} value={mailBody.subject}/>
        </div>
        <div className={`form-group ${isDark?'form-group-dark':'form-group-light'}`}>
          <textarea aria-hidden="false" id="body" className={`form-control ${isDark?'form-control-dark':'form-control-light'}`} rows="12" placeholder="Hello Shaw," onChange={e=>setMailBody({...mailBody,body:e.target.value})} value={mailBody.body}></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button className="send-btn" onClick={handleSendClick}>Send <FaAngleDown/></button>
        <BsFillLightningFill color={`${isDark?'#CCCCCC':'#181818'}`}/>
        <p className={`footer-text ${isDark?'footer-text-dark':'footer-text-light'}`}>Variables</p>
        <LuEye color={`${isDark?'#CCCCCC':'#181818'}`} size={18}/>
        <p className={`footer-text ${isDark?'footer-text-dark':'footer-text-light'}`}>Preview Email</p>
        <RxLetterCaseCapitalize color={`${isDark?'#CCCCCC':'#181818'}`} size={18}/>
        <div className={`misc-icons ${isDark?'icon-dark':'icon-light'}`}>
            <MdAttachment size={15} />
            <AiFillPicture size={15}/>
            <VscSmiley size={15} />
            <MdOutlinePersonRemoveAlt1 size={15}/>
            <PiBracketsAngleBold size={15} />
        </div>
      </div>
    
      </div>
    )
}
   
export default ReplyModal