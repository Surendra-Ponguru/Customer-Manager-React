import React, { Component } from 'react';
import logo from '../img/people.png';
import Body from './body';
//import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={


    }
  }
    
   handleClickLogout=()=>{
    <Navigate to="/Login"/>
    console.log("Logout");
   }
   handleClick=()=>{ 
       <Navigate to="/About"/>
       console.log("log");
       
   }
  render() {
    return (
      <div className="header1" > 
        <header>
            <img className="image1" src={logo}  alt="name"></img>
            <h3 style={{color:"white",marginTop:"10px"}}>Customer Manager</h3>
            <button  className="button1">Customers</button>
            
            <button className="button2">Orders</button>
            <button className="button2" onClick={(e)=>this.handleClick()}>About</button>
            <button className="button2" onClick={(e)=> this.handleClickLogout}>Logout</button>
            </header> 
    </div>
    );
  }
}
