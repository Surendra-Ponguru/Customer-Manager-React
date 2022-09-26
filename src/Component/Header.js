import React, { Component } from 'react';
import logo from '../img/people.png';
import Body from './body';
//import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import MapView from './mapview';



export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={


    }
  }

    customersPage=()=>{
      <Navigate to="/body"/>
      console.log("body");
    }
   handleClickLogout=()=>{
    localStorage.setItem("authenticated", false)
    this.setState({});
    console.log("Logout");
   }
   handleClick=()=>{ 
       <Navigate to="/About"/>
       console.log("log");   
   }

   isLoggedIn = () => JSON.parse(localStorage.getItem("authenticated") ?? "false");


  render() {
    // console.log(this.isLoggedIn())
    if(!this.isLoggedIn()){
      console.log("redirect");
    return <Navigate to="/"/>;
    }

    return (
      <div className="header1" > 
        <header>
            <img className="image1" src={logo}  alt="name"></img>
            <h3 style={{color:"white",marginTop:"10px"}}>Customer Manager</h3>
           <Link to="/App" ><button  className="button1">Customers</button></Link>
            
            <Link to="/Orders"><button className="button2">Orders</button></Link>
            <Link to={"/about"}><button className="button2" >About</button></Link>
            <button className="button2" onClick={(e)=> this.handleClickLogout()}>Logout</button>
            </header> 
    </div>
    );
  }
}
