import React, { Component } from "react";
import Customer from "./Customer";
import logos from "../img/male.png";
import logoss from "../img/female.png";
import logosss from "../img/addC1.png";
import CustomerList from "./customerlist";
import profileDetails from "./assets/profileDetails.json";
import { FaEdit } from "react-icons/fa";
import Paginate from "./pagination";
import MapView from "./mapview";
import CustomerDetails from "./CustomerDetail";
import AboutPage from "./About";
// import CustomerDetail from "./CustomerDetail";
// import axios from "axios";
import Login from './Login';


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleLogo: logos,
      samplePic: logoss,
      prDetails: [],
      listdetails: [],
      viewType: "gridView",
      openPage: "openPage",
      view: "mapedView",
      dataTransfer: "",
      customers: [],
      searchTerm: [],
      setSearchTerm: [],
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 5,
      pageNo: 0,
    };
    this.addCustomer = this.addCustomer.bind(this);
  }
  componentDidMount() {
    console.log("profileDetails", profileDetails);
    console.log("listview", profileDetails);
    console.log("Details", CustomerDetails);
    this.setState({ prDetails: profileDetails });
    // this.setState({listdetails:profileDetails});
  }


    /////******Add Customers *******/
  addCustomer = () => {
    return (
      <div>
        <div className="addCust1">
        <div className="inAddCust1">
                <img src={logosss} name="name" className="addimg"></img>
                <h1 style={{marginLeft:"-85px",marginTop:"20px",fontSize:"50px"}}>Customers Manager</h1>
        </div>
        <div>
          <form  >
            <table>
                <tr>
                  <td>
                    <label className="addLabel"> Enter firstName :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label  className="addLabel"> Enter lasstName :</label>
                  </td>
                  <td>
                    <input type="text"  className="addInput"></input>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label  className="addLabel"> Enter gender :</label>
                  </td>
                  <td>
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label  className="addLabel"> Enter address :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label  className="addLabel"> Enter city:</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label  className="addLabel"> Enter state :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label  className="addLabel"> state abbrevation:</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text"  className="addInput"></input>
                  </td>
                </tr>
              <div className="inAddCust2">
                <input   class="btn btn-outline-success" type="Submit"></input>
                <input   class="btn btn-outline-danger"  style={{maginLeft:"30px"}} type="Reset" name="Cancel"></input>
              </div>
            </table>
          </form>
          </div>
        </div>
      </div>
    );
  };



   ///*********Card View********** 
  listCustomerData = () => {
    this.totalOrder();
    return this.state.prDetails
      .slice(this.state.pageNo * 10, (this.state.pageNo + 1) * 10)
      .map((profile, index) => (
        <div key={index + 1} className="insideBodyDiv1">
          <div className="insideBodyDiv2">
            <label style={{ color: "white", marginLeft: "10px" }}>
              {profile.firstName} {profile.lastName}
            </label>
            <button
              style={{
                float: "right",
                padding: "6px",
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: "20px",
                marginTop: "-10px",
              }}
            >
              <FaEdit />
            </button>
          </div>
          <div className="insideBodyDiv3">
            <div>
              {profile.gender === "male" ? (
                <img
                  className="bodyImg"
                  src={logos}
                  style={{ width: "70px", height: "60px", marginLeft: "10px" }}
                  alt="name"
                ></img>
              ) : (
                <img
                  className="bodyImg"
                  src={logoss}
                  style={{ width: "70px", height: "60px", marginLeft: "10px" }}
                  alt="name"
                ></img>
              )}
            </div>
            <div className="insideBodyDiv4">
              <label style={{ fontSize: "17px" }}>{profile.city}</label>
              <br></br>
              <label style={{ fontSize: "17px" }}>{profile.state.name}</label>
              <br></br>
              <button
                src="#"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "15px",
                  color: "rgb(75, 120, 235)",
                  marginLeft: "-6px",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ));
  };

  ////*******List View ********/

  listView = () => {
    return (
      <div>
        <table className="table table-striped">
          <thead style={{ borderBottom: "2px solid black", fontSize: "17px" }}>
            <tr>
              <th className="list"> Profile</th>
              <th className="list">FirstName</th>
              <th className="list">LastName</th>
              <th className="list">Address</th>
              <th className="list">City</th>
              <th className="list">State</th>
              <th className="list" style={{ width: "100px;" }}>
                OrderTotal
              </th>
              <th className="list">Orders</th>
            </tr>
          </thead>
          <tbody>
            {console.log(this.state.prDetails)}
            {this.state.prDetails.map((profile, index) => {
              return (
                <tr key={index + 1}>
                  <td className="list1">
                    {" "}
                    {profile.gender === "male" ? (
                      <img
                        className="bodyImg"
                        src={logos}
                        style={{
                          width: "75px",
                          height: "70px",
                          marginLeft: "10px",
                        }}
                        alt="name"
                      ></img>
                    ) : (
                      <img
                        className="bodyImg"
                        src={logoss}
                        style={{
                          width: "90px",
                          height: "75px",
                          marginLeft: "10px",
                          background: "transparent;",
                        }}
                        alt="names"
                      ></img>
                    )}
                  </td>
                  <td className="list1">
                    <button
                      style={{
                        border: "none",
                        width: "100px",
                        background: "transparent",
                        color: "rgb(75, 120, 235)",
                      }}
                    >
                      {profile.firstName}
                    </button>
                  </td>
                  <td className="list1">{profile.lastName}</td>
                  <td className="list1" style={{ width: "150px" }}>
                    {profile.address}
                  </td>
                  <td className="list1">{profile.city}</td>
                  <td className="list1">{profile.state.name}</td>
                  <td className="list1">$ {this.totalOrder(profile.orders)}</td>
                  <td className="list1">
                    <button
                      style={{
                        border: "none",
                        width: "100px",
                        background: "transparent",
                        color: "rgb(75, 120, 235)",
                      }}
                      onClick={(e) => this.state.customerData("Details")}
                    >
                      View Orders
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  totalOrder = (orders) => {
    if (orders === undefined) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      sum += element.itemCost ?? 0;
    }
    return sum.toFixed(2);
  };

  // orderTotal() {
  // this.customers.map((profile.index) => {
  //     profile{'totalCost'} : 0;
  //     {(profile?.orders)?
  //       profile.orders = profile.orders.map((o:index) => {
  //         profile['totalCost'] += o.itemCost;
  //       });
  //     }
  //     }
  //   })
  // }
  
  search = (searchKey) => {
    let filterdata;
    if (searchKey!=''){
     filterdata= this.state.prDetails.filter((prDetails) =>
      prDetails.firstName.toLowerCase().includes(searchKey)
    
    );
    return filterdata}
    else{
      return this.state.prDetails
    }
  };

  render() {
    console.log("state", this.state);
    return (
       
      <div>

        <div>
           
          <Customer />
          <div>
            
              <CustomerList
                search={this.search}
                updateViewType={(type) => this.setState({ viewType: type })}
              />
          <div className="bodyDiv">
            <div className="insideBodyDiv">
              {console.log("CHeck view Type :", this.state.viewType)} 
              {this.state.viewType === "mapView" && <MapView />}
              {this.state.viewType === "listView" && this.listView()}
              {this.state.viewType === "gridView" && this.listCustomerData()}
              {this.state.viewType === "newCustomerView" && this.addCustomer()}
            
              
              {/* {this.state.viewType ==="About" &&<AboutPage/>} */}
            </div>
          </div>
          {this.state.viewType !== "mapView" &&
            this.state.viewType !== "listView" &&
            this.state.viewType !== "newCustomerView" && (
              <Paginate
                listdetails={this.state.prDetails}
                updatePageData={(data) => this.setState({ prDetails: data })}
                updatePageNo={(index) => this.setState({ pageNo: index })}
              />
            )}
        </div>
      </div>
      </div>
      );
            }
}
