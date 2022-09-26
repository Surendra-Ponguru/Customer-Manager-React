import React, { Component } from "react";
import Customer from "./Customer";
import logo from "../img/pro.jpg";
import logos from "../img/male.png";
import logoss from "../img/female.png";
import logosss from "../img/addC1.png";
import CustomerList from "./customerlist";
import profileDetails from "./assets/profileDetails.json";
import { FaEdit } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Paginate from "./pagination";
import MapView from "./mapview";
import CustomerDetails from "./CustomerDetail";
import { Link,Navigate } from "react-router-dom";
import AboutPage from "./About";
// import CustomerDetail from "./CustomerDetail";
// import axios from "axios";
import Login from "./Login";
import { Pagination } from "react-bootstrap";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sampleLogo: logos,
      samplePic: logoss,
      prDetails: [],
      filterdata: [],
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
      pageNo: 0,
    };
    this.addCustomer = this.addCustomer.bind(this);
  }
  componentDidMount() {
    console.log("profileDetails", profileDetails);
    console.log("listview", profileDetails);
    console.log("Details", CustomerDetails);
    this.setState({ prDetails: profileDetails });
    this.setState({ filterdata: profileDetails });
    // this.setState({listdetails:profileDetails});
  }

  //*********Customer */
  customerView = () => {
    return (
      <div>
        <div>
          <img className="image2" src={logo} alt="name"></img>
          <label className="label1">Customers</label>
        </div>
        <div className="myBtnContainer">
          <button
            className="btn"
            onClick={(e) => this.setState({ viewType: "gridView", pageNo: 0 })}
          >
            <FaMicrosoft style={{ marginBottom: "5px" }} /> Card View{" "}
          </button>
          <button
            className="btn"
            onClick={(e) => this.setState({ viewType: "listView", pageNo: 0 })}
          >
            <FaAlignJustify style={{ marginBottom: "5px" }} />
            List View{" "}
          </button>
          <button
            className="btn"
            onClick={(e) => this.setState({ viewType: "mapView" })}
          >
            <FaMapMarkerAlt style={{ marginBottom: "5px" }} />
            Map View
          </button>
          <button
            className="btn"
            onClick={(e) => this.setState({ viewType: "newCustomerView" })}
          >
            <FaPlus style={{ marginBottom: "5px" }} />
            New Customer
          </button>
          <div className="innerdiv2">
            <label>Filter:</label>
            <br></br>
            <input
              type="text"
              placeholder="...Search..."
              onChange={(event) => this.props.search(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
    );
  };

  /////******Add Customers *******/
  addCustomer = () => {
    return (
      <div>
        <div className="addCust1">
          <div className="inAddCust1">
            <img src={logosss} name="name" className="addimg"></img>
            <h1
              style={{
                marginLeft: "-85px",
                marginTop: "20px",
                fontSize: "50px",
              }}
            >
              Customers Manager
            </h1>
          </div>
          <div>
            <form>
              <table>
                <tr>
                  <td>
                    <label className="addLabel"> Enter firstName :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="addLabel"> Enter lasstName :</label>
                  </td>
                  <td>
                    <input type="text" className="addInput"></input>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="addLabel"> Enter gender :</label>
                  </td>
                  <td>
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="addLabel"> Enter address :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="addLabel"> Enter city:</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label className="addLabel"> Enter state :</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label className="addLabel"> state abbrevation:</label>
                  </td>
                  <td>
                    {" "}
                    <input type="text" className="addInput"></input>
                  </td>
                </tr>
                <div className="inAddCust2">
                  <input class="btn btn-outline-success" type="Submit"></input>
                  <input
                    class="btn btn-outline-danger"
                    style={{ maginLeft: "30px" }}
                    type="Reset"
                    name="Cancel"
                  ></input>
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
            <Link to="/CustomerDetail"><button
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
            </button></Link>
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
              <Link to="/CustomerDetail"><button
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
              </button></Link>
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
            {this.state.prDetails
              .slice(this.state.pageNo * 4, (this.state.pageNo + 1) * 4)
              .map((profile, index) => {
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
                    <Link to="/CustomerDetail"> <button
                        style={{
                          border: "none",
                          width: "100px",
                          background: "transparent",
                          color: "rgb(75, 120, 235)",
                        }}
                      >
                        {profile.firstName}
                      </button></Link>
                    </td>
                    <td className="list1">{profile.lastName}</td>
                    <td className="list1" style={{ width: "150px" }}>
                      {profile.address}
                    </td>
                    <td className="list1">{profile.city}</td>
                    <td className="list1">{profile.state.name}</td>
                    <td className="list1">
                      $ {this.totalOrder(profile.orders)}
                    </td>
                    <td className="list1">
                     <Link to="/CustomerDetail"><button
                        style={{
                          border: "none",
                          width: "100px",
                          background: "transparent",
                          color: "rgb(75, 120, 235)",
                        }}
                        onClick={(e) => this.state.customerData("Details")}
                      >
                        View Orders
                      </button></Link>
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

  search = (searchKey) => {
    let filterdata;
    console.log("sss", searchKey);
    if (searchKey != "") {
      filterdata = this.state.prDetails.filter(
        (prDetails) =>
          prDetails.firstName.toLowerCase().includes(searchKey) ||
          prDetails.lastName.toLowerCase().includes(searchKey) ||
          prDetails.gender.toLowerCase().includes(searchKey) ||
          prDetails.city.toLowerCase().includes(searchKey) ||
          prDetails.state.name.toLowerCase().includes(searchKey)
      );
      this.setState({ prDetails: filterdata });
    } else {
      this.setState({ prDetails: this.state.filterdata });
    }
  };

  render() {
    console.log("state", this.state);
    return (
      <div>

        <div>
          {this.customerView()}
          {this.state.viewType === "gridView" && this.listCustomerData()}
          {this.state.viewType === "listView" && this.listView()}
          {this.state.viewType === "mapView" && <MapView />}
          {this.state.viewType === "newCustomerView" && this.addCustomer()}
          {(this.state.viewType === "gridView" ||
            this.state.viewType === "listView") && (
            <Paginate
              listdetails={this.state.prDetails}
              view={this.state.viewType}
              updatePageNo={(index) => this.setState({ pageNo: index })}
            />
          )}
        </div>
      </div>
    );
  }
}
