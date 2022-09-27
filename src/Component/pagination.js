import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap/Button";

// import profileDetails from './assets/profileDetails.json';

function Paginate(props) {
  const [data, setData] = useState([]);
  const [pageSelected, updatePageSelected] = useState(0);
  let profileDetails = props.listdetails;
  const viewType=props.view;
  const pagesCount = new Array(Math.ceil(profileDetails.length /(viewType==="listView"?4:10))).fill(0);
  const setPagination = (indexValue) => {
    updatePageSelected(indexValue);
  };
  useEffect(() => {
    props.updatePageNo(pageSelected);
    
  }, [pageSelected]);
  console.log(profileDetails.length)
  return (
    <div className="btn-group me-2" style={{ marginLeft: "70px" }}>
      {pagesCount.map((_, index) => {
        return (
          <button
          className="pageButton"
            key={index}
            onClick={() => setPagination(index)}
            style={{
              height: "35px",
              width: "25px",
              margin: "3px",
              border: "1px solid black",
              background: "transparent",
            }}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
}

export default Paginate;
