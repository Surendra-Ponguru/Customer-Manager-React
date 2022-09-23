import React,{useState, useEffect}from "react";

// import profileDetails from './assets/profileDetails.json';


 function Paginate(props){
   const [data,setData]=useState([]);
   //const [perpage,setPerpage]=useState([]);
   //const [itemSet , setItemSet]=useState(0);
   const [pageSelected, updatePageSelected] = useState(0)
   let profileDetails = props.listdetails;
   //console.log("Pagination Details : ", parseInt(profileDetails.length/10))
   const pagesCount = new Array(Math.ceil(profileDetails.length/10)).fill(0)

    // useEffect(() => {
    //     setData(profileDetails.slice(0, 10))
        
    // }, [])

    const setPagination = (indexValue) => {
        updatePageSelected(indexValue)
    };   
 

   
     useEffect(()=>{
        // const pageStart = (pageSelected*11);
        // const pageEnd = (pageSelected+1)*11
        // const tempData = profileDetails.slice(pageStart, pageEnd)
        // setData(tempData)
        // props.updatePageData(tempData)
        props.updatePageNo(pageSelected);
   },[pageSelected])
    
        return (
        <div style={{marginLeft:"70px"}}>
        {
            pagesCount.map((_, index) => { return <button key={index} onClick={() => setPagination(index)} style={{height:"35px",width:"25px",margin:"3px",border:"1px solid black",background:"transparent"}}>{index}</button>})
        }
        </div>
        );
}

export default Paginate;