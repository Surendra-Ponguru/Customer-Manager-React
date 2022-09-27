import React, { Component } from "react";
import logop from "../img/pro.jpg";
import { FaAlignJustify } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Header from "./Header";

export default class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Customer: "Details",
    };
  }

  CustomerManager() {
    return(
    <div>
      <div style={{display:"flex"}}>
        <img className="image2" src={logop} alt="name" style={{marginTop:"8px" }}></img>
        <h3>  Customers Information</h3>
      </div>
      <div className="myBtnContainer">
        <button  className="btn">
          <FaAlignJustify />
          Customer Details
        </button>
        <button className="btn">
          <FaTags />
          Customer orders
        </button>
        <button className="btn">
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
                <Header/></div>{this.CustomerManager()}</div>
    );
  }
}
