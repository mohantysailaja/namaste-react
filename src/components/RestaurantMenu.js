import { useEffect } from "react";


const RestaurantMenu = ()=>{
useEffect(()=>{
fetchMenu();
},[]);

    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Diet Coke</li>
                <li>Dosa and Idlis</li>
            </ul>
        </div>
    )
}
export default RestaurantMenu;
//resuability