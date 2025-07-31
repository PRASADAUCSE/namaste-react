import { useContext } from "react";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";



const RestrauntCard = (props) => {
  const {resData} = props;
  const{cloudinaryImageId, name, cuisines, avgRating} = resData.info ;
  const {loggedUser} = useContext(UserContext);

  return(
    <div className = "m-4 p-4 w-67 rounded-lg bg-gray-100 hover:bg-gray-300">
      <img src = { RES_URL + cloudinaryImageId} className = "m-auto w-full"/>
      <h3 className="font-bold pt-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>{avgRating} Stars</h4>
      <h4>user: {loggedUser}</h4>
    </div>
  )
}
export default RestrauntCard;