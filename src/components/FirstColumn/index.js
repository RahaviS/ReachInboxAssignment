import { useContext } from "react";
import { MdOutlineRefresh,MdSearch  } from "react-icons/md"
import { FaAngleDown } from "react-icons/fa6"
import { IoIosSend } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const FirstColumn=(props)=>{
  const {mailingList,setThreadId,resetData}=props
  const {isDark}=useContext(ThemeContext)

  const getDate=(dateString)=>{
    const date= new Date(dateString);
    const formattedDate= date.toLocaleDateString('en-us',{month:'short',day:'numeric'});
    return formattedDate;
  }
 

 const handleClick=(id)=>{
    setThreadId(id)
 }
 const handleRefresh=()=>{
  const token=localStorage.getItem('auth_token');
  if(token){
  resetData(token)
  }
 }
    return(
        <div className='first-section'>
              <div className='all-inbox-section'>
                  <div className='all-inbox-div'>
                    <h1 className='all-inbox-text'>All Inbox(s)</h1>
                    <FaAngleDown color="#4285F4" size={20}/>
                  </div>
                  <button className={`reset-btn ${!isDark&&'reset-btn reset-btn-light'}`}><MdOutlineRefresh size={20} color={`${isDark?'#ffffff':'#000000'}`} onClick={handleRefresh}/></button>
              </div>
              <p className={`${isDark?'text-dark':'text-light'}`}>25/25 <span className={`${isDark?'span-dark':'span-light'}`}>Inboxes Selected</span></p>
              <div className={`search-section ${isDark?'search-dark':'search-light'}`}>
                <MdSearch color={`${isDark?'#CCCCCC':'#23272C'}`} size={22} />
                <input type="search" className='search-input' placeholder="Search"/>
              </div>
              <div className='inbox-header'>
                <div className={`replies-count ${!isDark&&'replies-count-light'}`}>26</div>
                <p className={`${isDark?'text-dark':'text-light'}`}>New Replies</p>
                <div className="newest"><p className={`${isDark?'text-dark':'text-light'}`}>Newest </p><FaAngleDown/> </div>
              </div>
              <hr className='styling-line'/>
              <ul className="msg-glimpse-list">
                {mailingList.map(eachMail=>(
                  <li className='msg-glimpse' key={eachMail.id} onClick={()=>handleClick(eachMail.threadId)}>
                  <div className="mail-from">
                      <p className={`mail-from-name ${!isDark&&'mail-from-name-light'}`}>{eachMail.fromEmail}</p>
                      <p className={`mail-text ${!isDark&&'mail-text-light'}`}>{getDate(eachMail.sentAt)}</p>
                  </div>
                  <p className={`mail-text ${!isDark&&'mail-text-light'}`}>{eachMail.subject}</p>
                  <div className='mail-flags'>
                      <div className={`flag-btn int ${!isDark&&'flag-btn-light'}`}><FaCircle/> Interested</div>
                      <div className={`flag-btn camp ${!isDark&&'flag-btn-light'}`}><IoIosSend/> Campaign Name</div>
                  </div>
                  <hr className="styling-line"/>
              </li>
                 ))}
              </ul> 
            </div>
    )
}

export default FirstColumn
