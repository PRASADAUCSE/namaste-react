// src/components/MenuItem.js (or whatever path you choose)
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; // Make sure this path is correct relative to MenuItem.js

const MenuItem = (props) => {
    console.log(props);
    const { name, price, defaultPrice, description, imageId } = props?.menuInfo;
    const RES_ITEM_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div className="flex justify-between border-gray-200 border-b-2 my-5 p-4 text-left">
            <div className="w-9/12">
                <h4 className="font-medium">{name}</h4>
                <h4> ₹ {price / 100}</h4>
                <h4 className="text-xs font-light">{description}</h4>
            </div>
            <div className="m-auto w-3/12 ">
                <div className="absolute">
                    <button
                        className="px-1 text-sm bg-white shadow-lg absolute mx-14 rounded-lg mt-27"
                        onClick={() => handleAddItem(props.menuInfo)}
                    >
                        Add+
                    </button>
                </div>
                {imageId && <img className="rounded-xl" src={RES_ITEM_IMG + imageId} />}
            </div>
        </div>
    );
}

export default MenuItem;