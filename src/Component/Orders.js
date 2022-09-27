import React, { Component } from "react";
import profileDetails from "./assets/profileDetails.json";
import Header from "./Header";

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prDetails: profileDetails,
    };
  }

  componentDidMount() {
    // console.log("profileDetails", profileDetails);
    // console.log(profileDetails);
    // this.setState({prDetails:profileDetails });
  }

  //****TotalOrder */
  totalOrder = (orders) => {
    if (orders === undefined) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      sum += element?.itemCost ?? 0;
    }
    return sum.toFixed(2);
  };

  //****Orders */
  OrdersView = () => {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr style={{ borderBottom: "2px solid black" }}>
              <th>
                <h6>Id</h6>
              </th>
              <th>
                <h6>Customer Name</h6>
              </th>
              <th>
                <h6>Items Name</h6>
              </th>
              <th>
                <h6>Items Cost</h6>
              </th>
              <th>
                <h6>Total Cost</h6>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.prDetails.map((profile, index) => (
              <tr key={index + 1}>
                <td>
                  <h6>{profile.id}</h6>
                </td>
                <td>
                  {profile.firstName} {profile.lastName}
                </td>
                <td>
                  <h6>
                    {profile.orders?.map((o) => o.productName).join(" , ")}
                  </h6>
                </td>
                <td>{profile.orders?.map((o) => o.itemCost).join(" + ")}</td>
                <td>
                  <h6>{this.totalOrder(profile.orders)}</h6>
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ display: "flex" }}>
                <h6 style={{ color: "red" }}>
                  Total Amount :{" "}
                  {this.totalOrder(
                    this.state.prDetails.flatMap((p) => p.orders)
                  )}
                </h6>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header />
        {this.OrdersView()}
      </div>
    );
  }
}
