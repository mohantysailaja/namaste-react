import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"; 
//passing restaurant data in form of json file 
//body
//not using keys (not accetable) <<<< index as key <<<<<< unique id (best practice)
const Body = () =>{
//State Variable  - Super Powerful Variable
const [listOfRestaurants, setlistOfRestaurants]=useState(resList);
//Array destructuring
//const arr = useState(resList);
//const listofRestaurant = arr[0];
//const setlistofRestaurants = arr[1];
//
return (
  <div className="body">
    <div className="search">Search</div> 
    <div className="filter-button">
      <button className="filter-btn"
      onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating >4);
        //console.log(resList);
        setlistOfRestaurants(filteredList);
      }}>
      
        Top Rated Restaurant</button>
    </div>
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