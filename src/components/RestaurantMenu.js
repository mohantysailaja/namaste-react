//import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
//import { MENU_API } from "../utils/constants";

const RestaurantMenu =() =>{
    
 // const [resMenuInfo, setResMenuInfo] = useState(null);

  //const params = useParams();
  //console.log(params);
   const {resId} = useParams();

//extract for custom hook
const resMenuInfo = useRestaurantMenu(resId); 
//ends here
/*
useEffect(() => {
fetchMenu();
},[]);

const fetchMenu = async () =>{
    const data = await fetch(MENU_API + resId );  
    const json = await data.json();

    console.log(json);
    setResMenuInfo(json.data);
};
*/
if(resMenuInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, areaName } =
    resMenuInfo?.cards[0]?.card?.card?.info;
    //resMenuInfo?.card[2]?.card?.card?.gridelement?.infoWithStyle?.restaurant[0]?.info;

    const{itemCards} =
    resMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards);
  //  console.log(resMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories = 
   resMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
    console.log(categories);
    const{lastMileTravelString}=
    resMenuInfo?.cards[0]?.card?.card?.info?.sla;
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <p>{areaName}{" ,"} {lastMileTravelString}
            <button className="location-btn">
                   <span>▾</span>
            </button></p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=> (
                <li key={item.card.info.id}>{item.card.info.name} - {" "}
                 ₹{item.card.info.price/100 || item.card.info.price/100}</li>
                ))}
               <li>Manual not dynamic</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;
//resuability