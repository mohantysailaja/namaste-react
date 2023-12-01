

//Named exports are imported with a {} froma specific file below,if default export no need of {}
import { CDN_URL } from "../utils/constants";
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
   <div className="rest-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img 
      className="res-logo w-[300px] h-[150px] rounded-lg"
       alt="res-logo"
       src={CDN_URL + cloudinaryImageId}/>
     <h3 className="font-bold py-4 text-lg">{name}</h3>
     <h4>{costForTwo}</h4>
     <h4>{avgRating}</h4>
     <h4>{resData.info.sla.deliveryTime} minutes</h4>     
     <h4>{cuisines.join(", ")} </h4>   
     <button>Click me to know the Menu</button>
   </div>
);
};

//Higher Order component
//input - RestaurantCard =>> RestaurantIsOpen
 export const withIsOpenLabel = (RestaurantCard) => {
   return (props) => {
      return (
     <div>
       <label className="absolute bg-green-600 text-black m-1 p-2 rounded-lg">
         IsOpen
       </label>
      <RestaurantCard {...props} />
     </div> 
      );
   };
 };
//input - RestaurantCard => RestaurantCardPromoted

export default RestaurantCard;