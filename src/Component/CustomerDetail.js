import React, { Component } from "react";
import logop from '../img/pro.jpg';
import { FaAlignJustify } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";



export default class CustomerDetail extends Component{
    constructor(props){
        super(props);
        this.state={
        Customer:"Details"
        }
    }
   
    CustomerManager(){
        <div style={{display:"flex"}}>
        <div>
        <img src={logop} alt="name"></img>
        <h3>Customers Information</h3>
        </div>
        <div>  
           <button><FaAlignJustify/>Customer Details</button>
           <button><FaTags/>Customer orders</button>
           <button><FaEdit/>Edit Customer</button>
        </div>
        </div>  
    }
    render(){
        return(
          <>
            <div>{this.props.CustomerManager()}</div>
            </>  
        ); 
    }
}