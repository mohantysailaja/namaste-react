//As it is a named import we can use inside {} as it is a js const variable inside {}
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//Header Componenet
const Header = () => {
//login button
//let btnName = "Login";
const[btnNameReact,setBtnNameReact] = useState("Login");
console.log("Header Rendered");
//If no dependecy array => useEffect is called on every render cycle
//if dependency array is empty = [] => useeffect is called on initial render (just once)
//If dependency array is [btnNameReact]=> called everytime btnNameReact is updated
useEffect(()=>{
  console.log("UseEffect called")
},[btnNameReact]);

//online status
const onlineStatus = useOnlineStatus();

    return  (
        <div className="flex justify-between bg-orange-100 shadow-lg">
           <div className="logo-container">     
              <img className="w-56"
               src={LOGO_URL}></img>
           </div>
           <div className="flex items-center">
             <ul className="flex  p-4 m-4">
              <li className="px-4"> 
                Aarush's online status : {onlineStatus ?"🛜" : "🔴" }Happy Me : Aarush  ! 🎸   ⚽️   🏀   🥋   🏏
              </li>
              <li className="px-4">
                <Link to="/">Home</Link>
                </li>        
              <li className="px-4">
                <Link to="/About">About Us</Link>
                </li>
              <li className="px-4">
                <Link to="/Contact">Contact Us</Link>
                </li>
                <li className="px-4"> 
                <Link to="/grocery">Grocery</Link>
                </li>
              <li className="px-4">
                <Link to="/Cart">Carts</Link>
                </li>    
              <button className="login-button" 
              onClick={()=>{
             btnNameReact === "Login"
             ? setBtnNameReact("Logout")
             : setBtnNameReact("Login");         
             }}
               >{btnNameReact}
               </button>     
             </ul>
             
           </div>
        </div>
     );
    };
    //Before import the Header component we need to export this 
    export default Header;
    //if we want to use named export just add export const Header in above code and in import file just mention 
    //the xexport name within {Header}