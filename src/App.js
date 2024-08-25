import Login from './components/Login'
import OneBox from './components/OneBox'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Login/>}/>
          <Route path="/onebox" element ={<OneBox/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
