import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu =() =>{
    
  const [resMenuInfo, setResMenuInfo] = useState(null);


useEffect(() => {
fetchMenu();
},[]);

const fetchMenu = async () =>{
    const data = await fetch(
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=600456&catalog_qa=undefined&query=Roll&submitAction=ENTER");
    const json = await data.json();

    console.log(json);
    setResMenuInfo(json.data);
};
//const Menu = (props) =>{
   // const {resMenuInfo} = props;
   // const {name, cuisines, costForTwoMessage} = resMenuInfo?.cards[0]?.card?.card?.info;
  //  console.log(resMenuInfo);
//}
    const { name } =
    resMenuInfo?.cards[0]?.card?.card?.info;

    return resMenuInfo === null ? 
    (<Shimmer />) : (
        <div className="menu">
            <h1>{name}</h1>
            <h3></h3>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Diet Coke</li>
                <li>Dosa and Idlis</li>
                <li>Icecream</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;
//resuability