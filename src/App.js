import React from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Tappu from "./components/Tappu";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () =>{
  const [userName, setUserName] = useState("Pr");

  //Authentication
  useEffect( () => {
    //Make an api call and send username and password
    
    setUserName(data.name);
  }, [])

   const data = {
      name: "Prasad"
    }
  

  return(
    <Provider store = {appStore}>
     <UserContext.Provider value = {{loggedUser: userName, setUserName}}>
        <div className = "app">
             <Header/>
             <Outlet/>
         </div>
     </UserContext.Provider>
    </Provider>
    
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
    path: "/",
    element: <Body/>,
      },
      {
    path: "/about",
    element: <About/>,
      }, 
      {
    path: "/Contact",
    element: <Contact/>,
      }, 
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>,
      },
      {
        path: "/grocery",
        element: <Suspense fallback = {<h1>Loading...</h1>} ><Grocery/></Suspense>,
      }, 
      {
        path: "/Cart",
        element: <Cart/>,
      } 
    ],
    errorElement : <Tappu/>,
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>)