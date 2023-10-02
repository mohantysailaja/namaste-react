import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react"; 
import { useEffect } from "react"; 
//passing restaurant data in form of json file 
//body
//not using keys (not accetable) <<<< index as key <<<<<< unique id (best practice)
const Body = () =>{
//State Variable  - Super Powerful Variable
const [listOfRestaurants, setListOfRestaurants]=useState(resList);

useEffect(() => {
  console.log("use effect");
}, []);//two arguments  1st arrow function,dependecy array should be called once you render the page
//Array destructuring
//const arr = useState(resList);
//const listofRestaurant = arr[0];
//const setlistofRestaurants = arr[1];
//Local State Variable - Super pOwerful variable
//const[listOfRestaurants] = useState([]);
//Normal Javacsript Variable
//let listOfRestaurants = [];
return (
  <div className="body">
    <div className="search">Search</div> 
    <div className="filter-button">
      <button className="filter-btn"
      onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 5
          );
        //console.log(resList);
        setListOfRestaurants(filteredList);
        console.log(filteredList);
      }}
      > 

        Top Rated Restaurant</button>
    </div>
      <div className="rest-container">
      
       {
         listOfRestaurants.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
         )}   
      </div>     
  </div>
);
};
export default Body;