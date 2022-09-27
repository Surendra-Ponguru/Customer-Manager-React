import './App.css';
import Header from './Component/Header';
import Body from './Component/body';
import { Navigate } from 'react-router-dom';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


function App() {
  const authenticated = JSON.parse(localStorage.getItem("authenticated") ?? "false");
  return (!authenticated) ? <Navigate  to="./Login"/> : (
    <div className='App'>
      <Header/>
      <Body/>
    </div>                         
  );
  
}

export default App;
