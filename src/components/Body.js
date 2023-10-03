  import RestaurantCard  from "./RestaurantCard";
  import resList from "../utils/mockData";
  import { useState ,useEffect} from "react"; 
  import Shimmer from "./Shimmer";


  const Body = () =>{

  const [listOfRestaurants, setListOfRestaurants]=useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
//whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered");

  useEffect(() => {
    fetchData();
  
  }, []);
  const fetchData = async  ()=>{
  const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  
  );
  const json = await data.json();
  console.log(json);
  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };


  return listOfRestaurants.length === 0 ? ( 
  <Shimmer /> 
  ) : ( 
    <div className="body">
      <div className="search">Search</div> 
      <div className="filter-button">    
      <div>
        <input type="text" className="search_box"
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value);}}
        />
        <button className="input_search_button"
        onClick={()=>{
        //Filter the restaurants cards and update the UI
        //searchText
          console.log(searchText);
         const filteredRestaurant = listOfRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
        }}
        >Search</button>
      </div>
        <button className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res .info.avgRating > 4
            );
        
          setListOfRestaurants(filteredList);
        
        }}
        > 
          Top Rated Restaurant</button>
      </div>
        <div className="rest-container">
        
        {
          
          filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
          )}   
        </div>     
    </div>
  );
  };
  export default Body;