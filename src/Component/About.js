import React, { Component } from "react";
import Header from "./Header";


export default class AboutPage extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    // about=()=>{
    //     return 
    //     <div> 
    //         <div style={{ textAlign: "center" }}>
    //     <h1>About Page</h1>
    //     <div
    //       style={{
    //         width: "30%",
    //         display: "inline-block",
    //         position: "relative",
    //       }}
    //     >
    //       Customer Manager is a customer managing platform which helps to
    //       efficiently manage all customers and their orders. <br />
    //       <br />
    //       </div>
    //   </div>
    //     </div>
    // }
  render() {
    return (
      <div>
        
       <Header/>
        <div> 
            <div style={{ textAlign: "center" }}>
        <h1>About Page</h1>
        <div
          style={{
            width: "30%",
            display: "inline-block",
            position: "relative",
          }}
        >
          Customer Manager is a customer managing platform which helps to
          efficiently manage all customers and their orders. <br />
          <br />
          </div>
      </div>
        </div>
   
      </div>
      
     
    );
  }
}
