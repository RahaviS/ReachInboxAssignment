import { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const PageContents =(props)=>{
    const {isDark}=useContext(ThemeContext)
    const {selectedMenu}=props
    return (
    <div className={`page-contents-container  ${isDark?'bg-dark':'bg-light'}`}>
       {selectedMenu!=="Inbox"? (
         <div className='no-mail-container'>  
           <img src="https://res.cloudinary.com/dktojjeva/image/upload/v1724553272/No_Message_illustration_qnfqj0.png" alt="no-msg"
           className='no-msg-img'/>
           <h1 className={`no-msg-text ${!isDark&&'dark-text'}`}>It’s the beginning of a legendary sales pipeline</h1>
           <p className={`no-msg-desc ${!isDark&&'dark-text'}`}>When you have inbound E-mails you’ll see them here</p>
         </div>):
         (<p>Mail List</p>)}
     
    </div>
    )
}
export default PageContents