import React,{useState} from "react";
import profileDetails from './assets/profileDetails.json';
//import Body from "./body";
//import CustomerList from "./customerlist";


const Filter = () => {
  const [search,setSearch]=useState("");
  const items=profileDetails;

   search=(items)=>{
    return items.filter(items=>items.firstName.toLowerCase().includes(items))
};
return(
    <>
    {this.search()}
    </>
)
  };
  export default Filter;