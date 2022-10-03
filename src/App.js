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
 

function App() {
  return (
    <div >
       
        <Navbar title="NavTitle" aboutText="AboutWorking" mode="cyan"/> 
        <div className="container my-3">
          <TextForm heading="Enter the text Here"/>
           
        </div>
        
    </div>
  );
}

export default App;
