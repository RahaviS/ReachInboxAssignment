import { MdOutlineRefresh,MdSearch  } from "react-icons/md"
import { FaAngleDown } from "react-icons/fa6"
import { IoIosSend } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import './index.css'

const FirstColumn=(props)=>{
  const {mailingList,setThreadId}=props

  const getDate=(dateString)=>{
    const date= new Date(dateString);
    const formattedDate= date.toLocaleDateString('en-us',{month:'short',day:'numeric'});
    return formattedDate;
  }
  const resetData=async (token)=>{
    const resetUrl=`https://hiring.reachinbox.xyz/api/v1/onebox/reset`
    const options={
      method:'GET',
      headers:{
        'Authorization':`Bearer ${token}`
      }
    }
    const response = await fetch(resetUrl,options)
    const responseData = await response.json()
    const {status,data}=responseData
    if(status===200){
      console.log(data);
    }
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
                  <button className='reset-btn'><MdOutlineRefresh size={20} color="#ffffff" onClick={handleRefresh}/></button>
              </div>
              <p className='text'>25/25 <span>Inboxes Selected</span></p>
              <div className='search-section'>
                <MdSearch color="#9E9E9E" size={22} />
                <input type="search" className='search-input' placeholder="Search"/>
              </div>
              <div className='inbox-header'>
                <div className='replies-count'>26</div>
                <p>New Replies</p>
                <div>Newest <FaAngleDown/> </div>
              </div>
              <hr className='styling-line'/>
              <ul className="msg-glimpse-list">
                {mailingList.map(eachMail=>(
                  <li className='msg-glimpse' key={eachMail.id} onClick={()=>handleClick(eachMail.threadId)}>
                  <div className='mail-from'>
                      <p className='mail-from-name'>{eachMail.fromEmail}</p>
                      <p className='mail-text'>{getDate(eachMail.sentAt)}</p>
                  </div>
                  <p className='mail-text'>{eachMail.subject}</p>
                  <div className='mail-flags'>
                      <div className='flag-btn int'><FaCircle/> Interested</div>
                      <div className='flag-btn camp'><IoIosSend/> Campaign Name</div>
                  </div>
                  <hr className="styling-line"/>
              </li>
                 ))}
              </ul> 
            </div>
    )
}

export default FirstColumn
