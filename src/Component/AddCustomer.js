
import React,{useState,useEffect} from "react";
import axios from "axios";


function AddCustomer()  {
  const [resoponse,setresponse]=useState({})
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    latitude:"",
    longitude:""
  });
  const getData=()=>{
    axios.get('http://localhost:3005/users')
      .then((res)=>{
        setresponse(res.data)
      })
      .catch((err)=> {
        console.log(err);
      });
  }
  useEffect(()=>{
    getData()
  },[])

  async function handleFormSubmit() {
    let obj={
        "id": resoponse.length+1,
    "firstName":formData.FirstName,
    "lastName":formData.LastName,
    "gender": formData.gender,
    "address":formData.address,
    "city": formData.city,
    "state": {
      "abbreviation":formData.state.slice(0,2),
      "name": formData.state
    },
    // "latitude":formData.latitude,
    // "longitude":formData.longitude
  }
    obj=JSON.stringify(obj);
    let response = await axios.post("http://localhost:3005/users", obj,{headers:{
        'Content-Type': 'application/json'
    }});
    if (response) {
      alert(formData.FirstName+" Data added Succcessfully");
      window.location.reload()
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
      latitude:"",
      longitude:""
    });
  };
  return (
    <div>
        <div className="container">
      <div className="row">
        <div className="col-md-7">
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            FirstName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="first name"
            value={formData.FirstName}
            onChange={(e) =>
              setFormData({ ...formData, FirstName: e.target.value })
            }
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            LastName
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="last Name"
            value={formData.LastName}
            onChange={(e) =>
              setFormData({ ...formData, LastName: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            gender
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="gender"
            value={formData.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            city
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            state
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="state"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={handleFormSubmit}>
            Add User
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddCustomer;
