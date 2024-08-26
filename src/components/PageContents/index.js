import { useState,useContext ,useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import Modal from 'react-modal'
import FirstColumn from '../FirstColumn';
import SecondColumn from '../SecondColumn';
import ThirdColumn from '../ThirdColumn';
import ReplyModal from '../ReplyModal'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

Modal.setAppElement('#root');

const PageContents =(props)=>{
    const location = useLocation();
    const {isDark,replyModal,setReplyModal}=useContext(ThemeContext)
    const {selectedMenu}=props
   
    const [mailingList,setMailingList]=useState([])
    const [mailThread,setMailThread]=useState([])
    const [threadIdList,setThreadIdList]=useState(null)
    const [clickedId,setClickedId]=useState(null)
    const [deleteModal,setDeleteModal]=useState(false)

    const setThreadId=(id)=>{
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
   
   useEffect(() => {
    const listenKeyDown = (event) => {
      if (event.key === 'r' || event.key === 'R') {
        setReplyModal(true)
      }else if(event.key==='d'|| event.key==='D'){
        setDeleteModal(true)
      }
    };
    window.addEventListener('keydown', listenKeyDown);
    return () => {
      window.removeEventListener('keydown', listenKeyDown);
    };
    //eslint-disable-next-line
  }, []);

  const closeDeleteModal=()=>{
    setDeleteModal(false)
  }
   const closeReplyModal = () => {
    setReplyModal(false);
  };
  const customStyles = {
    content: {
      background: 'linear-gradient(180deg, #141517 0%, #232528 100%)',
      width:'380px',
      height:'200px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
 
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
          localStorage.setItem('auth_token',token)
          localStorage.setItem('first_name',user.firstName)
          localStorage.setItem('last_name',user.lastName)
          localStorage.setItem('email',user.email)
          //console.log(tokenResponse)
          getMailingList(token)
      }
      //eslint-disable-next-line
  },[selectedMenu])

  const sendReply=async (token,mailBody)=>{
      const sendUrl=`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${clickedId}`
      const options={
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify(mailBody)
      }
      const response = await fetch(sendUrl,options)
      const responseData = await response.json()
      const {status,message}=responseData
      if(status===404){
        console.log(message)
      }
      else{
        console.log(status, message)
      }
  }

  const onClickSend=(mailBody)=>{
    const token=localStorage.getItem('auth_token');
    if(token){
      sendReply(token,mailBody)
    }
  }

  const deleteThread= async(token)=>{
    const deleteUrl=`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${clickedId}`
    const options={
      method:'DELETE',
      headers:{
         'Authorization': `Bearer ${token}`
      }
    }
    const response = await fetch(deleteUrl,options)
    const responseData= await response.json()
    const {status,message}=responseData
    if(status===200){
      getMailingList(token)
      closeDeleteModal()
      console.log(message)
    }
  }

  const onClickDelete=()=>{
    const token=localStorage.getItem('auth_token');
    if(token){
    deleteThread(token)
    }
  }
    
    return (
      <>
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
    {replyModal&&<div className="reply-modal">
     <ReplyModal
       mailDetails={mailThread}
       closeReplyModal={closeReplyModal}
       onClickSend={onClickSend}
      /> 
     </div>}
     {deleteModal &&
     <Modal isOpen={deleteModal}
      style={customStyles}
      onRequestClose={closeDeleteModal}>
      <div className='delete-modal'>
        <h1 className='dlt-modal-title'>Are you sure?</h1>
        <p className='dlt-modal-text'>Your selected email will be deleted</p>
        <div className='btn-section'>
          <button type="button" className='cancel-btn' onClick={closeDeleteModal}>Cancel</button>
          <button type="button" className='delete-btn' onClick={onClickDelete}>Delete</button>
        </div>
      </div>
     </Modal>
     }
     </>
    )
}
export default PageContents