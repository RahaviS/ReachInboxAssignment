import PrimaryNavbar from '../PrimaryNavbar';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css'

const OneBox = () => {
    const location = useLocation();

    const getMailingList=async (token)=>{
        const getUrl = `https://hiring.reachinbox.xyz/api/v1/onebox/list`
        const options = {
            method:"GET",
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }
        const response= await fetch(getUrl,options);
        const data = await response.json();
        console.log(data);
    }

    useEffect(()=>{
        const token = location.search.split("?token=").join("")
        if(token){
            const tokenResponse=jwtDecode(token);
            console.log(tokenResponse);
            //console.log(user.firstName);
            getMailingList(token)
        }
    },[])
  
  return (
    <div className='onebox-page-container'>
    <PrimaryNavbar />
    <div className='contents-container'>
    <Navbar/>
    </div>
    </div>
  )
}
export default OneBox
