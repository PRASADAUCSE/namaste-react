import {LOGO_URL} from "../utils/constants"
import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const[logButtonReact, setLogButtonReact] = useState("Login");
  console.log("React Rendered");
  const onlineStatus = useOnlineStatus();

  const {loggedUser} = useContext(UserContext);

  //Subscribing to the store using our selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  
  return(
    <div className = "flex justify-between bg-pink-200 shadow-lg m-2 px-2 py-2 sm:bg-yellow-200 lg:bg-green-200">
      <div className = "logo-container">
        <img src = {LOGO_URL}
        className = "logo w-40"/>
      </div>
      <div className = "nav-items flex items-center">
        <ul className = "flex p-4 m-4">
          <li className = "px-4">
            Online Status: {onlineStatus? "true": "false"};
          </li>
          <li className = "px-4">
            <Link to = "/">Home</Link>
            </li>
          <li className = "px-4">
            <Link to = "/about">About us</Link>
            </li>
          <li className = "px-4">
            <Link to= "/Contact">Contact us</Link>
            </li>
          <li className = "px-4">
            <Link to= "/grocery">Grocery</Link>
          </li>
          
          <li className = "px-4 font-bold">
            <Link to = "/Cart">Cart-({cartItems.length} items)</Link>
          </li>
          <button className = "login-button"
          onClick = {() => {
            logButtonReact === "Login"
             ? setLogButtonReact("Logout")
             :setLogButtonReact("Login");
          }}>
            {logButtonReact}
          </button>
         <li className = "px-4 font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;