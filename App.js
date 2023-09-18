import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Restaurant container
 * Restaurant Card
 *  - Image
 *  - Nmae of the restaurant, start ratings , cuisine ,delivery time etc.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
//Header Componenet
const Header = () =>
    (
      <div className="header">
         <div className="logo-container">     
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
         </div>
         <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Carts</li>
           </ul>
         </div>
      </div>
   );

   //Style Card
   const styleCard = {
       //backgroundColor:"#f0f0f0"
   };
   //Restaurant Card
   const RestaurantCard = () =>
   (
      <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
         <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"></img>
        <h3>Meghana Foods</h3>
        <h4>Biriyani, North Indian, Asian, chinese</h4>
        <h4>4.4 Stars</h4>
        <h4>38 mins</h4>
      </div>
   )
//body
const Body = () =>
(
  <div className="body">
    <div className="search">Search</div> 
      <div className="rest-container">
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
         <RestaurantCard/>
      </div>     
  </div>
);


const AppLayout = () =>
 
   (
      <div className="app">
         <Header />
         <Body/>
      </div>
   );

const x = 1200;

const HeadingComponent = () => 

(
<div id="container">
   <h2>{x}</h2>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


