import { useState,useContext ,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import FirstColumn from '../FirstColumn';
import SecondColumn from '../SecondColumn';
import ThirdColumn from '../ThirdColumn';
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const PageContents =(props)=>{
    const location = useLocation();
    const {isDark}=useContext(ThemeContext)
    const {selectedMenu}=props
   
    const [mailingList,setMailingList]=useState([])
    const [mailThread,setMailThread]=useState([])
    const [threadIdList,setThreadIdList]=useState(null)
    const [clickedId,setClickedId]=useState(null)

    const setThreadId=(id)=>{
      console.log(id)
      setClickedId(id)
    }
    const fetchMail=async (token)=>{
      const getUrl = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${clickedId}`
      const options = {
       method:"GET",
       headers:{
           'Authorization': `Bearer ${token}`
       }
     }
     const response= await fetch(getUrl,options);
       if(response.ok){
         const responseData = await response.json();
         const {data}=responseData
         setMailThread(data)
       }
   }
   useEffect(()=>{
    if(threadIdList){
    setClickedId(threadIdList[0])
    }
   },[threadIdList])

   const getThreadIds=(mailList)=>{
     let idList= mailList.map(each=>each.threadId)
     setThreadIdList(idList)
   }

   
 
   useEffect(()=>{
     const token=localStorage.getItem('auth_token');
     if(clickedId&&token){
       fetchMail(token)
     }
     //eslint-disable-next-line  
   },[clickedId])

    const getMailingList=async (token)=>{
      const getUrl = `https://hiring.reachinbox.xyz/api/v1/onebox/list`
      const options = {
          method:"GET",
          headers:{
              'Authorization': `Bearer ${token}`
          }
      }
      const response= await fetch(getUrl,options);
      if(response.ok){
        const responseData = await response.json();
        const {data} =responseData;
        getThreadIds(data)
        setMailingList(data)
      }
  }

    useEffect(()=>{
      const token = location.search.split("?token=").join("")
      if(token){
          const tokenResponse=jwtDecode(token)
          const {user}=tokenResponse;
          localStorage.setItem('auth_token',token);
          localStorage.setItem('first_name',user.firstName);
          localStorage.setItem('last_name',user.lastName)
          //console.log(tokenResponse)
          getMailingList(token)
      }
      //eslint-disable-next-line
  },[selectedMenu])
    
    return (
    <div className={`page-contents-container  ${isDark?'bg-dark':'bg-light'}`}>
       {selectedMenu!=="Inbox"? (
         <div className='no-mail-container'>  
           <img src="https://res.cloudinary.com/dktojjeva/image/upload/v1724553272/No_Message_illustration_qnfqj0.png" alt="no-msg"
           className='no-msg-img'/>
           <h1 className={`no-msg-text ${!isDark&&'dark-text'}`}>It’s the beginning of a legendary sales pipeline</h1>
           <p className={`no-msg-desc ${!isDark&&'dark-text'}`}>When you have inbound E-mails you’ll see them here</p>
         </div>):
         (<div className='inbox-container'>
            <FirstColumn mailingList={mailingList} setThreadId={setThreadId}/>
            <SecondColumn mailThread={mailThread}/>
            <ThirdColumn />
         </div>)}
     
    </div>
    )
}
export default PageContents