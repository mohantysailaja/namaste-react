  import RestaurantCard ,{withIsOpenLabel} from "./RestaurantCard";
  import resList from "../utils/mockData";
  import { useState ,useEffect} from "react"; 
  import Shimmer from "./Shimmer";
  import { Link } from "react-router-dom";
  import { IMAGE_EXTERNAL } from "../utils/constants";
  import { IMG_VEG } from "../utils/constants";
  import useOnlineStatus from "../utils/useOnlineStatus";

  const Body = () =>{

  const [listOfRestaurants, setListOfRestaurants]=useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  const RestaurantCardIsOpen = withIsOpenLabel(RestaurantCard);
//whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
  console.log("body rendered to make higher order component", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async  ()=>{
  const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  
  );
  const json = await data.json();
  console.log(json);
  console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

//useonlineStatus
const onlineStatus = useOnlineStatus();
if(onlineStatus === false)
return(
  <h1>
    Looks like you're offline !!! please check your interne connections !!!
     
  </h1>
);



  if(listOfRestaurants?.length === 0) return <Shimmer />;
  //return listOfRestaurants.length === 0 ? ( 
  //<Shimmer /> 
  //  <img className="veg-logo" src={IMG_VEG}></img>
  //) : ( 
    return (
    <div className="body">
     
      <div className="filter-button flex">      
      <div className="search m-4 p-4">
        <input type="text" className="search_box border border-solid border-blue"
        value={searchText}
        onChange={(e)=>{setSearchText(e.target.value);}}
        /> 
        
        <button className="input_search_button px-4 py-2 bg-green-100 m-4 rounded-lg "
        onClick={()=>{
        //Filter the restaurants cards and update the UI
        //searchText
          console.log(searchText);
         const filteredRestaurant = listOfRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurant(filteredRestaurant);
        }}
        >Search<span className="icon-magnifier">&#128269;</span>
        </button>
       
      </div>
      <div className="search m-4 p-4 flex items-center">
      <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
        onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
            );
          console.log(filteredList);
          setListOfRestaurants(filteredList);
        
        }}
        > 
          Top Rated Restaurant</button>
      </div>
   
      </div>
        <div className="rest-container flex flex-wrap">    
        {    
          filteredRestaurant.map((restaurant) => (
            <Link 
            key ={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}>

              {/** higher Order component - if the restaurant is open  then add a isopen label to it -enhancement*/}
             {restaurant.info.isOpen ? (
             
            <RestaurantCardIsOpen key={restaurant.info.id} resData={restaurant}/>
             ) : (
              <RestaurantCard resData={restaurant} />
             )}
            </Link>
 
         //  <Link><RestaurantCard key={restaurant.info.id} resData={restaurant}/></Link>)
          ))}   
        </div>     
    </div>
  );
  };
  export default Body;