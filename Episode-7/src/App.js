import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
/*import {Header} from "./components/Header";if the export is named export type*/
import Body from "./components/Body";


   
   //live data
   /*const resObj = { 
      name:"Tesco",
      cuisine:"Biriyani",
      avgRating:4.8,
      deliveryTime:39
   };
   */
  /*const resObj =
  {
  "info": {
   "id": "5934",
   "name": "Burger King",
   "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
   "locality": "Koramangala",
   "areaName": "Koramangala",
   "cuisines":["Biriyani", "North Indian", "Asian","Chinese","Burgers",
   "American"],
   "costForTwo": "₹350 for two",
   "deliveryTime": 29,
   "avgRating": 4.2,
   "feeDetails": {
   "restaurantId": "5934",
   "fees": [
   {
   "name": "BASE_DISTANCE",
   "fee": 7800
   },
   {
   "name": "BASE_TIME"
   },
   {
   "name": "ANCILLARY_SURGE_FEE"
   }
   ],
   "totalFee": 7800
   },
   "parentId": "166",
   "avgRatingString": "4.2",
   "totalRatingsString": "10K+",
   "sla": {
   
   "lastMileTravel": 6.5,
   "serviceability": "SERVICEABLE",
   "slaString": "29 mins",
   "lastMileTravelString": "6.5 km",
   "iconType": "ICON_TYPE_EMPTY"
   },
   "availability": {
   "nextCloseTime": "2023-09-19 05:00:00",
   "opened": true
   },
   "badges": {},
   "isOpen": true,
   "type": "F",
   "badgesV2": {
   "entityBadges": {
   "imageBased": {},
   "textBased": {},
   "textExtendedBadges": {}
   }
   },
   "aggregatedDiscountInfoV3": {
   "header": "60% OFF",
   "subHeader": "UPTO ₹120"
   },
   "differentiatedUi": {
   "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
   "differentiatedUiMediaDetails": {
   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
   "lottie": {},
   "video": {}
   }
   },
   "reviewsSummary": {},
   "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
   "restaurantOfferPresentationInfo": {}
   },
   "analytics": {},
   "cta": {
   "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
   "type": "WEBLINK"
   }
   }
;
*/
 



//Body Layout starts here
const AppLayout = () =>
   (
      <div className="app">
         <Header />
         <Body/>
      </div>
   );

const x = 1200;

const HeadingComponent = () => 

(
<div id="container">
   <h2>{x}</h2>
</div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


