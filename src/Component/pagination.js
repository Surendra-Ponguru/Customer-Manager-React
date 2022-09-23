import React, { useState, useEffect } from "react";

// import profileDetails from './assets/profileDetails.json';

function Paginate(props) {
  const [data, setData] = useState([]);
  const [pageSelected, updatePageSelected] = useState(0);
  let profileDetails = props.listdetails;
  const pagesCount = new Array(Math.ceil(profileDetails.length / 10)).fill(0);
  const setPagination = (indexValue) => {
    updatePageSelected(indexValue);
  };
  useEffect(() => {
    props.updatePageNo(pageSelected);
  }, [pageSelected]);

  return (
    <div style={{ marginLeft: "70px" }}>
      {pagesCount.map((_, index) => {
        return (
          <button
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
