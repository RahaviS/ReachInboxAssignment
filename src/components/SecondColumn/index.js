import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6"
import { BsThreeDots } from "react-icons/bs";
import { MdReply } from "react-icons/md";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import { format } from 'date-fns'
import './index.css'

const SecondColumn=(props)=>{
  const {mailThread}=props

  const {isDark,setReplyModal}=useContext(ThemeContext)
 
  const getFormattedDate=(dateString)=>{
    const formattedDate = format(new Date(dateString), 'd MMMM yyyy : h:mma')
    return formattedDate;
  }

  const openReplyModal=()=>{
     setReplyModal(true)
  }

    return(
        <div className={`second-section ${!isDark&&'light-section'}`}>
              <div className={`mail-header ${!isDark&&'header-light'}`}>
                <div className='name-details'>
                  <p className={`user-name ${isDark?'user-name-dark':'user-name-light'}`}>Mitrajit Chandra</p>
                  <p className='mail-id'>shaw@getmemeetings.com</p>
                </div>
                <div className='mail-event-details'>
                  <div className={`meeting-section ${isDark?'meeting-section-dark':'meeting-section-light'}`}>
                    <FaCircle color="#E6D162" size={14} />
                    <p className='meeting-text'>Meeting Completed</p>
                    <FaAngleDown />
                  </div>
                  <div className={`meeting-section ${isDark?'meeting-section-dark':'meeting-section-light'}`}>
                    <p className='meeting-text'>Move</p>
                    <FaAngleDown />
                  </div>
                  <div className={`meeting-section ${isDark?'meeting-section-dark':'meeting-section-light'}`}>
                    <BsThreeDots />
                  </div>  
                </div>  
              </div>
              <ul className='mail-body-container'>
                <p>Today</p>
                {mailThread.map(eachThread=>(
                   <li className={`mail-body ${isDark?'mail-body-dark':'mail-body-light'}`} key={eachThread.id}>
                   <div className='mail-top'>
                     <p className={`mail-subject ${isDark?'mail-subject-dark':'mail-subject-light'}`}>{eachThread.subject}</p>
                     <p className="mail-date">{getFormattedDate(eachThread.sentAt)}</p>
                   </div>
                   <div className='mail-content'>
                     <p className={`${!isDark&&'from-to-light'}`}>{`from: ${eachThread.fromEmail}`}</p>
                     <p className={`${!isDark&&'from-to-light'}`}>{`to: ${eachThread.toEmail}`}</p>
                     <div className={`mail-msg ${!isDark&&'from-to-light'}`} dangerouslySetInnerHTML={{ __html: eachThread.body }} />
                   </div>
                 </li>
                ))}
              </ul>
              <button type="button" className="reply-btn" onClick={openReplyModal}><MdReply size={20}/><p>Reply</p></button>
            </div>
    )
}
export default SecondColumn