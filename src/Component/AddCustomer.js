import axios from "axios";
import React, { useState, useEffect } from "react";

const AddCustomer = () => {
  const [resoponse, setresponse] = useState({});

  const getData = () => {
    axios
      .get("http://localhost:3005/users")
      .then((res) => {
        setresponse(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    latitude: "",
    longitude: "",
  });

  async function handleFormSubmit() {
    let obj = {
      firstName: formData.FirstName,
      lastName: formData.LastName,
      gender: formData.gender,
      address: formData.address,
      city: formData.city,
      state: {
        abbreviation: formData.state.slice(0, 2),
        name: formData.state,
      },
      // "latitude":formData.latitude,
      // "longitude":formData.longitude
    };
    obj = JSON.stringify(obj);
    let response = await axios.post("http://localhost:3005/users", obj, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      window.alert("Customer added Succcessfully");
      window.location.reload();
    } else {
      alert("something went wrong");
    }
    setFormData({
      FirstName: "",
      LastName: "",
      gender: "",
      address: "",
      city: "",
      state: "",
      latitude: "",
      longitude: "",
    });
  }
  return (
    <div className="container" style={{ marginTop: "15px" }}>
      <div className="row">
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First name"
            value={formData.FirstName}
            onChange={(e) =>
              setFormData({ ...formData, FirstName: e.target.value })
            }
            required
          />
        </div>
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
            value={formData.LastName}
            onChange={(e) =>
              setFormData({ ...formData, LastName: e.target.value })
            }
          />
        </div>
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            required
          />
        </div>
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="D.No , Area Name "
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          ></input>
        </div>
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="City"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>
        <div class="col-md-6" style={{ marginTop: "10px" }}>
          <label htmlFor="exampleFormControlInput1" class="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="State"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </div>
        <div class="col-md-4" style={{ marginLeft:"300px",marginTop:"20px"}}>
          <button
            className="btn btn-success"
            onClick={handleFormSubmit}
            style={{ width: "500px", backgroundColor: " rgb(75, 120, 235)" }}
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
