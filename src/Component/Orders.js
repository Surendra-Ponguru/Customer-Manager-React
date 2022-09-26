import React, { Component } from "react";
import profileDetails from "./assets/profileDetails.json";
import Header from "./Header";

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prDetails: [],
    };
  }
  componentDidMount() {
    console.log("profileDetails", profileDetails);
    this.setState({ prDetails: profileDetails });
  }
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

  OrdersView = () => {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Items Name</th>
              <th>Customer Name</th>
              <th>totalOrder</th>
            </tr>
          </thead>
          <tbody>
            {this.state.prDetails.map((profile, index) => {
              //console.log(profile);
            
              <tr key={index + 1}>
                <td>{profile.id}</td>
                <td>{profile.state}</td>
                <td>
                  {profile.firstName} {profile.lastName}
                </td>
                
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  };

  //   <td>{profile.Orders.map(o=>
  //{<div>{o.productName}</div>})}</td>
  render() {
    return (
      <div>
        <Header />
        {this.OrdersView()}
      </div>
    );
  }
}
