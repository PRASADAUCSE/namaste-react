import { useDispatch, useSelector } from "react-redux";
import MenuItem from './MenuItem'; 
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const dispatch = useDispatch();
    const handleCart = () =>{
        dispatch(clearCart())
    }
  const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className = "text-center m-4 p-4"> 
            <h1 className = "font-bold text-2xl">Cart</h1>
            <button 
              className = "text-white bg-black p-2 rounded-lg cursor-pointer"
              onClick={handleCart}
            >
              Clear Cart
            </button> 
            <div className = "w-6/12 m-auto">
               {cartItems.length === 0 && <h1>Your Cart is  empty</h1>}
                {cartItems.map((item) =>(
                    <MenuItem key = {item.id} menuInfo = {item}/>
                ))}
            </div>
        </div>
    )
}

export default Cart;