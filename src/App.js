import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
 
import {Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Co from './components/Co';
import So from './components/So';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

 

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';

    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div >
       
        <Navbar title="NavTitle" aboutText="AboutWorking" mode={mode} toggleMode={toggleMode}/> 
        <div className="container my-3">
          <TextForm heading="Enter the text Analizer Below" mode={mode}/>
           
        </div>
        
    </div>
  );
}

export default App;
