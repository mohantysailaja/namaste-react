import RestaurantCard  from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect} from "react"; 
import Shimmer from "./Shimmer";

//passing restaurant data in form of json file 
//body
//not using keys (not accetable) <<<< index as key <<<<<< unique id (best practice)
const Body = () =>{
//State Variable  - Super Powerful Variable
const [listOfRestaurants, setListOfRestaurants]=useState([]);

useEffect(() => {
  fetchData();
 // console.log("use effect called !");
}, []);
const fetchData = async  ()=>{
const data = await fetch(
 
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json = await data.json();
console.log(json);
setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
//setListOfRestaurants(data.cards[5].card.card.gridElements.infoWithStyle.restaurant[0].info)
};

//conditional rendering
/*if (listOfRestaurants.length === 0){
  return 
  <Shimmer />
  //<h1>Loading......</h1>
}*/
//ends here



//two arguments  1st arrow function,dependecy array should be called once you render the page
//Array destructuring
//const arr = useState(resList);
//const listofRestaurant = arr[0];
//const setlistofRestaurants = arr[1];
//Local State Variable - Super pOwerful variable
//const[listOfRestaurants] = useState([]);
//Normal Javacsript Variable
//let listOfRestaurants = [];
return listOfRestaurants.length ===0 ? <Shimmer /> :
(
  <div className="body">
    <div className="search">Search</div> 
    <div className="filter-button">
      <button className="filter-btn"
      onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
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
        //earlier it was resList.map when we loop over each card
       // listOfRestaurants.map((restaurant => <RestaurantCard  resData={restaurant}/>)
        listOfRestaurants.map((restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
         )}   
      </div>     
  </div>
);
};
export default Body;