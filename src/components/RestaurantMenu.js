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
if(resMenuInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, areaName } =
    resMenuInfo?.cards[0]?.card?.card?.info;

    const{itemCards} =
    resMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);
     
    const{lastMileTravelString}=
    resMenuInfo?.cards[0]?.card?.card?.info?.sla;
    
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - ₹{costForTwoMessage}
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