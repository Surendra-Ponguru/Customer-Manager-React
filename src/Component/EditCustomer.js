import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { isRouteErrorResponse } from "react-router-dom";



const EditCustomer= () => {
  const [data, setdata] = useState([{}]);
  useEffect(() => {
    getUser();
    // console.log("rr",data);
  }, []);
  
  const getUser = async() => {
    await axios
      .get("http://localhost:3005/users")
      .then((res) =>setdata(res.data));
      
  };
  const handleDelete=async()=>{
    await axios.delete("http://localhost:3005/users")
    .then( res => alert(res.data,'deleted succesfully'));
  }
  return (
    <div style={{marginTop:"10px"}}>
      <table className="table  table-striped-columns"> 
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">city</th>
            <th scope="col">state</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((user) => {
              console.log(user)
              return (
              <tr key={user.id}>
                <td scope="row">{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state?.name}</td>
                <td
                  style={{ display:"flex",justifyContent:"space-between" }}
                >
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </td>
              </tr>);
            })}
        </tbody>
      </table>
    
    </div>
  );
};

export default EditCustomer;
