

//Named exports are imported with a {} froma specific file below,if default export no need of {}
import { CDN_URL } from "../../utils/constants";
//Style Card

//If we wish to add style we can declare variable and pass within {} like below 
const styleCard = {
    //backgroundColor:"#f0f0f0"
};
//Restaurant Card
const RestaurantCard = (props) =>{
//const {restName, cuisine} = props;
const { resData } = props;
//restructuring the code 
const {cloudinaryImageId,
   name,
   costForTwo,
   avgRating,
   cuisines,} =resData?.info;

console.log(props);
return (
   <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
      <img 
      className="res-logo"
       alt="res-logo"
       src={CDN_URL + cloudinaryImageId}/>
     <h3>{name}</h3>
     <h4>{costForTwo}</h4>
     <h4>{avgRating}</h4>
     <h4>{resData.info.sla.deliveryTime} minutes</h4>     
     <h4>{cuisines.join(", ")} </h4>   
   </div>
);
};

export default RestaurantCard;