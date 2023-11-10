import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resMenuInfo, setResMenuInfo]= useState(null);
  
    //fetchdata   
    useEffect(() => {
        fetchData();
    },[]);
   
    const fetchData = async () =>{
        const data = await fetch(MENU_API + resId) ;
        const json = await data.json();
        setResMenuInfo(json.data);
    };

    return resMenuInfo;//local variable for this hook
}

export default useRestaurantMenu;