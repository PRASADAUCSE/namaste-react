import {useEffect} from "react";
import {useState} from "react";
import { RESTAURANTMENU_API, MENU_LAST } from "../utils/constants";
import { useParams } from "react-router";
import MenuItem from './MenuItem';
import RestaurantMenuShimmer from "../utils/restaurantMenuShimmer";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);
    const[resMenu, setResMenu] = useState([]);
    const {resId} = useParams();
    console.log(resId);
    
    useEffect(() =>{
        fetchData();
    }, []
   );

 const fetchData = async() => {
    
    const data = await fetch(RESTAURANTMENU_API + resId + MENU_LAST);
    const json = await data?.json();
    console.log(json);
    
    
    const menuData = (
        json?.data?.cards?.find((item) => 
             item.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
                ?.filter((obj) => 
                    obj?.card?.card["@type"].includes("NestedItemCategory")
                    ||
                    obj?.card?.card["@type"].includes("ItemCategory")));
    console.log(menuData);
     if(!menuData || !Array.isArray(menuData)) return;
     const organizedMenuData = menuData.map((item) => {
        const type = item?.card?.card["@type"]
        const title = item?.card?.card?.title;
        const itemCards = item?.card?.card?.itemCards || [];
        const categories = item?.card?.card?.categories || [];
        //console.log(categories)
        
        if(type?.includes("NestedItemCategory")){
            return{ 
                title,
                type: "nested",
                categories: categories.map((SubCategory) => {
                    return{
                        title: SubCategory?.title,
                           itemCards: SubCategory?.itemCards,

                    }
                })
            }
        }
        else{
            return{
                title,
                type: "Item Card",
                itemCards,
            }
        }
    
    });
    

    setResInfo(
        json?.data?.cards?.find((item) =>
            item?.card?.card["@type"]?.includes("food.v2.Restaurant"))
              ?.card?.card?.info);
    //console.log(resInfo);

    setResMenu(organizedMenuData);

    
    
    
}
const[showIndex, setShowIndex] = useState(1);
//console.log(resMenu);
if(resInfo === null) return <RestaurantMenuShimmer/>;

const{name, avgRating, cuisines,  costForTwoMessage} = resInfo;



    return(
    <div>
        <div className = "text-center ">
            <h1 className = "font-bold text-lg" >This is restraunt menu Page top section</h1>
            <h2 className = "font-bold my-5 text-xl">{name}</h2>
            <p className = "font-bold ">{avgRating} -- {costForTwoMessage}</p>
            <p  className = "font-bold ">{cuisines.join(", ")}</p>
        </div>
        <div>
            {resMenu.map((category, index) =>(
                category?.type === "Item Card" ? (
                    <ItemCategory key = {category?.title} 
                    data = {category} 
                    showItems = { index === showIndex ? true : false}
                    setShowIndex = { () => setShowIndex(prev =>(prev === index? null: index))}/>
                ):(
                    <NestedItemCategory key = {category?.title} data = {category}/>
                )
            ))}
        </div>
    </div>
    );
}

const ItemCategory = (props) => {
    const{title, itemCards}= props?.data;
    const{showItems} =props;
    const{setShowIndex} = props;
    const handleClick = () => {
        setShowIndex(); 
    }
    
    return (
    <div className = "w-6/12 bg-white shadow-lg m-auto p-5 text-center my-5 cursor-pointer">
        <div className = " flex justify-between " onClick= {handleClick}>
            <p className = "font-bold ">{title} ({itemCards.length})</p>
            <span>🔽</span>
        </div>
        <ul>
            { showItems &&
              itemCards.map((item) =>(
                <MenuItem 
                    key = {item?.card?.info?.id}
                    menuInfo = {item?.card?.info}/>
                ))
            }
            
        </ul> 
        
    </div>
    )
}

const NestedItemCategory = (props) => {
    const[showItems, setShowItems] = useState(false);
    //console.log(props);
    const handleClick = () => {
        setShowItems(!showItems);
       console.log("recommended clicked");
    }

    const{title, categories}= props?.data;

    //console.log(categories)
    return (
    
        <div className = "w-6/12 bg-white shadow-lg m-auto   py-5 my-5 cursor-pointer" >
            <p className = "font-bold showItems pl-5">{title} </p>
        
        {categories?.map((subCategory) => (
            <div  key = {subCategory?.title}>
                <div className = "flex justify-between pl-5" onClick = {handleClick}>
                <h3 className = "font-medium" >
                    {subCategory?.title} ({subCategory?.itemCards?.length})
                </h3>
                <span className = "px-5"></span>
                </div>
                <ul>
                    { showItems &&
                       subCategory?.itemCards?.map((item) =>(
                        <MenuItem
                         key = {item?.card?.info?.id}
                         menuInfo = {item?.card?.info}/>
                    ))}
                </ul>
            </div>
        ))}
        
        </div>
        
    
    )
}

export default RestaurantMenu;;