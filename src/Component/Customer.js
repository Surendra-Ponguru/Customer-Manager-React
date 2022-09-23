import React, { Component } from 'react';
import logo from '../img/pro.jpg';


export default class Customer extends Component {
    state={
        sampleLogo:logo
      }
  render() {
    return (
      <div>
         <img className="image2" src={logo}  alt="name"></img>
         <label className="label1">Customers</label>
      </div>
        
    );
  }
}
