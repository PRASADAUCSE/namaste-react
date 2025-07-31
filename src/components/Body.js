import RestrauntCard from "./RestrauntCard";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useState, useEffect} from "react";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../utils/shimmer";
//



const Body = () => {
  const [listOfRestraunts, setListOfRestraunts] = useState([]);

  const[searhText, setSearchText] = useState("");

useEffect(() => {
  const fetchData = async() => {
     try{ 
         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
         const json = await data.json();
         const listOfRestraunts = json?.data?.cards?.find((item) => 
            item?.card?.card?.id?.includes("restaurant_grid")
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants
          setListOfRestraunts(listOfRestraunts);
        }
     
     catch(err){
      console.log(err.message);
     }
    }
    fetchData();
}, []);

console.log(listOfRestraunts);


// conditional rendering
//  if(listOfRestraunts.length === 0){
//   return <Shimmer/>;
//  }

const onlineStatus = useOnlineStatus();
if(onlineStatus === false)
  return(
  <h1>
    Looks like you are offline!! Please check your internet connection
  </h1>
  );
  const {loggedUser, setUserName} = useContext(UserContext)
  if(listOfRestraunts.length === 0 ){
    console.log("shimmer rendered");
    return <Shimmer/>
    
  }
  else{
    return(
    <div className = "body">
      <div className = "filter flex">
        <div className = "Search m-4 p-4">
          <input className = "border border-solid border-black" 
          type = "text" 
          value = {searhText} 
          onChange = {(e) => 
           { setSearchText(e.target.value)}}/>

          <button className = "px-4 py-1 bg-green-100 m-4 rounded-lg"
          onClick = {
            () => {console.log({searhText})
            const filteredText = listOfRestraunts.filter((res) =>res.info.name.toLowerCase().includes(searhText.toLowerCase()));
            setListOfRestraunts(filteredText);
          }
        }>
            Search
          </button>
        </div>
        <div className = "Search m-4 py-8 flex item-center">
          <button className = "px-4 bg-green-100 rounded-lg"
          onClick = {() =>{
            const filteredList = fastDeliveryRes.filter(
              (res) => res.info.sla.deliveryTime<50
            );
            setFastDeliveryRes(filteredList); 
          }  
          }
          >
            get fast delivery Restraunts
          </button>

          <div>
            <label>User Name</label>
            <input 
              type = "text"
              className = "border m-2 p-2"
              value = {loggedUser}
              onChange = {(e) => setUserName(e.target.value)}/>
          </div>

        </div>
        
      </div>
      <div className = "flex flex-wrap w-screen">
        {
        listOfRestraunts.map((restraunt) =>(
          <Link  key = {restraunt.info.id} to={"/restaurants/" + restraunt.info.id}>
          <RestrauntCard  resData = {restraunt}/>
          </Link>
         ))}
      </div>
    </div>

  )
  }
  
}
export default Body;