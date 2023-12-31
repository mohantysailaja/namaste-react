//As it is a named import we can use inside {} as it is a js const variable inside {}
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
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

    return  (
        <div className="header">
           <div className="logo-container">     
              <img className="logo"
               src={LOGO_URL}></img>
           </div>
           <div className="nav-items">
             <ul>
              <li><a href="#">Home</a></li>        
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Carts</a></li>    
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