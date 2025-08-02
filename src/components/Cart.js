import { useDispatch, useSelector } from "react-redux";
import MenuItem from './MenuItem'; 
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // Select the cart items from the Redux store
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // Handler to clear the cart
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="text-center p-4"> 
            <h1 className="font-bold text-2xl my-4">Cart</h1>
            
            {/* Conditional "Clear Cart" button, visible only if items exist */}
            {cartItems.length > 0 && (
                <button
                    className="text-white bg-black p-2 my-4 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            )}

            <div className="w-6/12 m-auto bg-gray-50 p-4 rounded-lg shadow-lg">
                {cartItems.length === 0 && (
                    <h1 className="text-xl font-semibold my-8">Your Cart is empty. Add some delicious food!</h1>
                )}
                {cartItems.map((item) => (
                    <MenuItem key={item.id} menuInfo={item}/>
                ))}
            </div>
        </div>
    );
};

export default Cart;
