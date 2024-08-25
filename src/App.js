import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Login from './components/Login'
import OneBox from './components/OneBox'
import './App.css'

const App=()=> {
  const [isDark,setIsDark]=useState(true)
  const toggleTheme=()=>{
    setIsDark(!isDark)
  }
  return (
    <ThemeContext.Provider value={{isDark,toggleTheme}}>
    <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/onebox" element ={<OneBox/>}/>
       </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
