import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"; 
//passing restaurant data in form of json file 
//body
//not using keys (not accetable) <<<< index as key <<<<<< unique id (best practice)
const Body = () =>{
return (
  <div className="body">
    <div className="search">Search</div> 
      <div className="rest-container">
        <RestaurantCard resData={resList[0]}/> 
       {
         resList.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
         )}   
      </div>     
  </div>
);
};
export default Body;