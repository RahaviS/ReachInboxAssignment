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
import './index.css'

const ReplyModal=(props)=>{
    const {closeReplyModal,mailDetails}=props
    const {fromEmail,toEmail}=mailDetails[0]
   
    return(
   <div className="modal-container">
    <div className="modal-header">
        <p className="reply-text">Reply</p>
        <button onClick={closeReplyModal} className="close-btn"><IoMdClose size={20} color="#BAB9BD"/></button>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label htmlFor="to" className="label-text">To:</label>
          <input type="text" id="to" className="form-control" value={toEmail} />
        </div>
        <div className="form-group">
          <label htmlFor="from" className="label-text">From:</label>
          <input type="text" id="from" className="form-control" value={fromEmail}/>
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="label-text">Subject:</label>
          <input type="text" id="subject" className="form-control"  />
        </div>
        <div className="form-group">
          <textarea id="body" className="form-control" rows="12" placeholder="Hello Shaw,"></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn btn-primary">Send <FaAngleDown/></button>
        <BsFillLightningFill color="#CCCCCC"/>
        <p className="footer-text">Variables</p>
        <LuEye color="#CCCCCC" size={18}/>
        <p className="footer-text">Preview Email</p>
        <RxLetterCaseCapitalize color="#CCCCCC" size={18}/>
        <div className="misc-icons">
            <MdAttachment size={15} color="#CCCCCC"/>
            <AiFillPicture size={15} color="#CCCCCC"/>
            <VscSmiley size={15} color="#CCCCCC"/>
            <MdOutlinePersonRemoveAlt1 size={15} color="#CCCCCC"/>
            <PiBracketsAngleBold size={15} color="#CCCCCC"/>
        </div>
      </div>
    
      </div>
    )
}
   
export default ReplyModal