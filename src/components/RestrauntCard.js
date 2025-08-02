import { useContext } from "react";
import { RES_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestrauntCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, areaName} = resData.info ;
    const {loggedUser} = useContext(UserContext);
    console.log(resData);

    return(
        <div className="p-4 m-4 w-64 h-80 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer bg-white">
            <div className="h-40 overflow-hidden rounded-lg mb-2">
                <img 
                    src={RES_URL + cloudinaryImageId} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    alt={name}
                />
            </div>
            <h3 className="font-bold pt-2 text-lg text-gray-900 overflow-hidden whitespace-nowrap text-ellipsis">{name}</h3>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-800 font-semibold">
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">&#9733;</span>
                    <span>{avgRating}</span>
                </div>
                <div>{resData.info.sla.deliveryTime} mins</div>
                
            </div>
            <p className="text-sm text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">{cuisines.join(", ")}</p>
            
            <div className = " text-sm text-gray-600 text-ellipsis">{resData.info.areaName}</div>
            
        </div>
    );
};

export default RestrauntCard;
