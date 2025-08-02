import RestrauntCard from "./RestrauntCard";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "../utils/Shimmer";

const Body = () => {
    // State to hold the original, complete list of restaurants
    const [allRestraunts, setAllRestraunts] = useState([]);
    // State to hold the list of restaurants to be displayed (filtered)
    const [filteredRestraunts, setFilteredRestraunts] = useState([]);
    
    const [searhText, setSearchText] = useState("");
    const [isTopRated, setIsTopRated] = useState(false); // State for top-rated filter
    const [isFastDelivery, setIsFastDelivery] = useState(false); // State for fast delivery filter

    // Moved fetchData outside useEffect for reusability
    const fetchData = async () => {
        try { 
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
            const fetchedRestaurants = json?.data?.cards?.find((item) => 
                item?.card?.card?.id?.includes("restaurant_grid")
            )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            // Set both the original and filtered lists initially
            setAllRestraunts(fetchedRestaurants);
            setFilteredRestraunts(fetchedRestaurants);
        } catch(err){
            console.log(err.message);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    // Function to apply all active filters
    const applyFilters = (searchText, topRated, fastDelivery) => {
        let tempFilteredList = allRestraunts;

        // Apply search filter
        if (searchText) {
            tempFilteredList = tempFilteredList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // Apply top-rated filter
        if (topRated) {
            tempFilteredList = tempFilteredList.filter((res) => res.info.avgRating > 4.5);
        }

        
        setFilteredRestraunts(tempFilteredList);
    };

    // Handler for search button
    const handleSearchClick = () => {
        applyFilters(searhText, isTopRated, isFastDelivery);
    };

    // Handler for top-rated button
    const handleTopRatedFilter = () => {
        const newTopRatedState = !isTopRated;
        setIsTopRated(newTopRatedState);
        applyFilters(searhText, newTopRatedState, isFastDelivery);
    };

    // Handler for fast delivery button
    const handleFastDeliveryFilter = () => {
        const newFastDeliveryState = !isFastDelivery;
        setIsFastDelivery(newFastDeliveryState);
        applyFilters(searhText, isTopRated, newFastDeliveryState);
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return(
            <h1>
                Looks like you are offline!! Please check your internet connection
            </h1>
        );
    }
    
    if(allRestraunts.length === 0 ){ // Show shimmer if the original list is empty
        return <Shimmer/>;
    }

    //const {loggedUser, setUserName} = useContext(UserContext);

    return(
        <div className="body">
            <div className="filter flex">
                <div className="Search flex items-center justify-center p-4">
    <input 
        className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        type="text" 
        value={searhText} 
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search for restaurants..."
    />
    <button 
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-r-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
        onClick={handleSearchClick}
    >
        Search
    </button>
</div>
                <div className="Search m-4 py-8 flex item-center">
                    {/* Button for Fast Delivery */}
                    
                    
                    {/* Button for Top-Rated Restaurants */}
                    <button
                        className={`px-4 py-1 m-5  rounded-lg text-white ${isTopRated ? "bg-yellow-500" : "bg-gray-500"}`}
                        onClick={handleTopRatedFilter}
                    >
                        Top Rated
                    </button>

                    {/* <div>
                        <label>User Name</label>
                        <input 
                            type="text"
                            className="border m-2 p-2"
                            value={loggedUser}
                            onChange={(e) => setUserName(e.target.value)}/>
                    </div> */}
                </div>
            </div>
            <div className="flex flex-wrap w-screen">
                {filteredRestraunts.map((restraunt) => (
                    <Link key={restraunt.info.id} to={"/restaurants/" + restraunt.info.id}>
                        <RestrauntCard resData={restraunt}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
