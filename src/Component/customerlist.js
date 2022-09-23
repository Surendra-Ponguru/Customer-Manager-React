import React, { Component } from 'react';
import { FaMicrosoft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
//import { Button } from 'bootstrap';
//import profiledetails from './assets/profileDetails.json';
//import Filter from './filter';
import Body from './body';

 




export default class CustomerList extends Component {
  constructor(props){
    super(props);
    this.state={
     
    } 
    } 
    // componentDidMount(){
    //   this.setState({searchTerm:setSearchTerm});
    // }
    // this.props.addCustomer()
  render() {
    return (
      <div className='myBtnContainer'>
       <button  className='btn' onClick={(e)=>this.props.updateViewType("gridView")}><FaMicrosoft style={{marginBottom:"5px"}}/> Card View </button>
       <button  className='btn' onClick={(e)=>this.props.updateViewType("listView")}><FaAlignJustify style={{marginBottom:"5px"}}/>List View </button>
       <button  className='btn' onClick={(e)=>this.props.updateViewType("mapView")}><FaMapMarkerAlt style={{marginBottom:"5px"}} />Map View</button>
       <button  className='btn' onClick={(e)=>this.props.updateViewType("newCustomerView")} ><FaPlus style={{marginBottom:"5px"}}/>New Customer</button>
       <div className='innerdiv2'>
       <label>Filter:</label><br></br>
        <input type="text" placeholder='...Search...' onChange={(event) =>this.props.search(event.target.value)}></input>
       </div>
      </div>
      );
  }
}
