import React,{useState }from "react";
//import profileDetails from "./assets/profileDetails.json";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import axios from "axios";

//const profile=profileDetails.users;
const libraries = ["places"];
const mapContainerStyle = {
  width: "70vw",
  height: "70vh",
};
const center = {
   lat: 17.447642286814634,
  lng: 78.355588967688
};

function MapView() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [data,setdata]= useState([{}]);

  const getUser = async() => {
    await axios
      .get("http://localhost:3005/users")
      .then((res) =>setdata(res.data));
      console.log(data.length,"mmm") ;
  };
  if (loadError) return "Error Loading maps";
  if (!isLoaded) return "loading maps";
  return (
    <div className="App" style={{display:"flex",width:"100%"}}>
      <div class="table-wrapper-scroll-y my-custom-scrollbar">
        <table className="table table-striped">
       
          <thead>
            <tr style={{border:"2px solid black"}}>
              <th>Profile List</th>
            </tr>
          </thead>
          <tbody>
            {data.map((index) => (
              <tr className="maptr">
                <td style={{display:"flex",border:"none"}}>
                  <>{index.id}.</>
                  <button className="mapedButton">
                    {index.firstName}{index.lastName}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{marginLeft:"30px",marginTop:"20px"}}>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center} />
      </div>
    </div>
  );
}
// lat: 17.447642286814634,
// lng: 78.355588967688,

export default MapView;
