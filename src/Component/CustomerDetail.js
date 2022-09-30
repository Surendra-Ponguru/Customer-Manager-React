import React, { Component } from "react";
import logop from "../img/pro.jpg";
import { FaAlignJustify } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Header from "./Header";
//import { Link } from "react-router-dom";
import EditCustomer from "./EditCustomer";
//import { ThemeProvider } from "react-bootstrap";


export default class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customer: "Details",
      viewDetails:"edit"
    };
  }
  customersDeatils=()=>{
    return (
        <div>customerDetails</div>
    )
  }
  ordersDetail=()=>{
    return (
        <div> ordersDetail</div>
    )
  }
  EditCustomer=()=>{
    return (
      <div>

      </div>
    );
  }



  CustomerManager() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <img
            className="image2"
            src={logop}
            alt="name"
            style={{ marginTop: "8px" }}
          ></img>
          <h3> Customers Information</h3>
        </div>
        <div className="myBtnContainer">
          <button className="btn"  onClick={(e) => this.setState({ viewDetails:"detailsView"})}>
            <FaAlignJustify />
            Customer Details
          </button>
          <button className="btn" onClick={(e) => this.setState({ viewDetails:"ordersView"})}>
            <FaTags />
            Customer orders
          </button>
          <button className="btn"  onClick={(e) => this.setState({ viewDetails:"editView"})}>
            <FaEdit />
            Edit Customer
          </button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        {this.CustomerManager()}
        {this.state.viewDetails==="detailsView" && this.customersDeatils()}
        {this.state.viewDetails==="ordersView" && this.ordersDetail()}
        {this.state.viewDetails==="editView" && <EditCustomer/>}
        
      </div>
    );
  }
}
