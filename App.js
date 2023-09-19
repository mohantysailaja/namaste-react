import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Restaurant container
 * Restaurant Card
 *  - Image
 *  - Nmae of the restaurant, start ratings , cuisine ,delivery time etc.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */
//Header Componenet
const Header = () =>
    (
      <div className="header">
         <div className="logo-container">     
            <img className="logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU"></img>
         </div>
         <div className="nav-items">
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Carts</li>
           </ul>
         </div>
      </div>
   );

   //Style Card
   const styleCard = {
       //backgroundColor:"#f0f0f0"
   };
   //Restaurant Card
   const RestaurantCard = (props) =>{
   //const {restName, cuisine} = props;
   const { resData } = props;
   console.log(props);
   return (
      <div className="rest-card" style={{backgroundColor:"#f0f0f0"}}>
         <img 
         className="res-logo"
          alt="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            resData.info.cloudinaryImageId
            }
          />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.avgRating}</h4>
        <h4>{resData.info.deliveryTime} minutes</h4>     
        <h4>{resData.info.cuisines.join(", ")} </h4>   
      </div>
   );
   };
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
const resList = [
   {
      "info": {
         "id": "5934",
         "name": "Burger King",
         "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
         "locality": "Koramangala",
         "areaName": "Koramangala",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Burgers",
         "American"
         ],
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
         "deliveryTime": 29,
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
         },    
   {
      "info": {
         "id": "65797",
         "name": "Leon's - Burgers & Wings (Leon Grill)",
         "cloudinaryImageId": "r4ufflqojich0r29efvc",
         "locality": "Koramangala",
         "areaName": "Koramangala",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "American",
         "Snacks",
         "Turkish",
         "Portuguese",
         "Continental"
         ],
         "avgRating": 4.3,
         "feeDetails": {
         "restaurantId": "65797",
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
         "parentId": "371281",
         "avgRatingString": "4.3",
         "totalRatingsString": "10K+",
         "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 6.3,
         "serviceability": "SERVICEABLE",
         "slaString": "25 mins",
         "lastMileTravelString": "6.3 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 04:00:00",
         "opened": true
         },
         "badges": {},
         "isOpen": true,
         "aggregatedDiscountInfoV2": {},
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {}
         }
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
         "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "506322",
         "name": "Louis Burger",
         "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
         "locality": "2nd stage domlur",
         "areaName": "Indiranagar",
         "costForTwo": "₹600 for two",
         "cuisines": [
         "Burgers",
         "American",
         "Fast Food"
         ],
         "avgRating": 4.2,
         "feeDetails": {
         "restaurantId": "506322",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 8300
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 8300
         },
         "parentId": "22485",
         "avgRatingString": "4.2",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 6.4,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "6.4 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 04:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
         {
         "imageId": "newg.png",
         "description": "Gourmet"
         }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {
         "badgeObject": [
         {
         "attributes": {
         "description": "Gourmet",
         "imageId": "newg.png"
         }
         }
         ]
         },
         "textBased": {},
         "textExtendedBadges": {}
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
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
         "link": "https://www.swiggy.com/restaurants/louis-burger-2nd-stage-domlur-indiranagar-bangalore-506322",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "10584",
         "name": "Pizza Hut",
         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
         "locality": "Indiranagar",
         "areaName": "Indiranagar",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Pizzas"
         ],
         "avgRating": 3.6,
         "feeDetails": {
         "restaurantId": "10584",
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
         "parentId": "721",
         "avgRatingString": "3.6",
         "totalRatingsString": "10K+",
         "sla": {
         "deliveryTime": 34,
         "lastMileTravel": 6.1,
         "serviceability": "SERVICEABLE",
         "slaString": "34 mins",
         "lastMileTravelString": "6.1 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 04:00:00",
         "opened": true
         },
         "badges": {},
         "isOpen": true,
         "aggregatedDiscountInfoV2": {},
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {}
         }
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
         "link": "https://www.swiggy.com/restaurants/pizza-hut-indiranagar-bangalore-10584",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "314691",
         "name": "Momoz",
         "cloudinaryImageId": "ktiphhoyhayzyrxxxyy6",
         "locality": "Ganganagar",
         "areaName": "RT Nagar",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Chinese",
         "Thai",
         "Seafood",
         "Asian",
         "Malaysian"
         ],
         "avgRating": 3.9,
         "feeDetails": {
         "restaurantId": "314691",
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
         "parentId": "2486",
         "avgRatingString": "3.9",
         "totalRatingsString": "5K+",
         "sla": {
         "deliveryTime": 28,
         "lastMileTravel": 6.8,
         "serviceability": "SERVICEABLE",
         "slaString": "28 mins",
         "lastMileTravelString": "6.8 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 04:30:00",
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
         "link": "https://www.swiggy.com/restaurants/momoz-ganganagar-rt-nagar-bangalore-314691",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "19386",
         "name": "WarmOven Cake & Desserts",
         "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
         "locality": "2nd stage",
         "areaName": "Indiranagar",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Bakery",
         "Desserts",
         "Ice Cream",
         "Beverages"
         ],
         "avgRating": 4.1,
         "feeDetails": {
         "restaurantId": "19386",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 6800
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 6800
         },
         "parentId": "9696",
         "avgRatingString": "4.1",
         "totalRatingsString": "10K+",
         "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "26 mins",
         "lastMileTravelString": "5.7 km",
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
         "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-2nd-stage-indiranagar-bangalore-19386",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "23423",
         "name": "Samosa Party",
         "cloudinaryImageId": "tjvc0aazurmha5ovsazb",
         "locality": "HAL 3rd Stage",
         "areaName": "Jeevan Bima Nagar",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "Fast Food",
         "Snacks",
         "Beverages",
         "Chaat",
         "North Indian",
         "Street Food",
         "Sweets",
         "Desserts",
         "Punjabi",
         "Bakery"
         ],
         "avgRating": 4.3,
         "feeDetails": {
         "restaurantId": "23423",
         "fees": [
         {
         "name": "BASE_TIME"
         },
         {
         "name": "BASE_DISTANCE",
         "fee": 10300
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 10300
         },
         "parentId": "6364",
         "avgRatingString": "4.3",
         "totalRatingsString": "10K+",
         "sla": {
         "deliveryTime": 32,
         "lastMileTravel": 8.1,
         "serviceability": "SERVICEABLE",
         "slaString": "32 mins",
         "lastMileTravelString": "8.1 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-26 00:00:00",
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
         "header": "10% OFF",
         "subHeader": "ABOVE ₹1500",
         "discountTag": "FLAT DEAL"
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
         "link": "https://www.swiggy.com/restaurants/samosa-party-hal-3rd-stage-jeevan-bima-nagar-bangalore-23423",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "295135",
         "name": "McDonald's Gourmet Burger Collection",
         "cloudinaryImageId": "hrq0twgdtifzabgavvpr",
         "locality": "6th Phase",
         "areaName": "JP Nagar",
         "costForTwo": "₹600 for two",
         "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
         ],
         "avgRating": 4.2,
         "feeDetails": {
         "restaurantId": "295135",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 10300
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 10300
         },
         "parentId": "10761",
         "avgRatingString": "4.2",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 31,
         "lastMileTravel": 8.6,
         "serviceability": "SERVICEABLE",
         "slaString": "31 mins",
         "lastMileTravelString": "8.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 03:45:00",
         "opened": true
         },
         "badges": {},
         "isOpen": true,
         "aggregatedDiscountInfoV2": {},
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {}
         }
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
         "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-6th-phase-jp-nagar-bangalore-295135",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "408386",
         "name": "NOTO - Healthy Ice Cream",
         "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
         "locality": "Ejipura",
         "areaName": "Koramangla",
         "costForTwo": "₹250 for two",
         "cuisines": [
         "Ice Cream"
         ],
         "avgRating": 4.4,
         "veg": true,
         "feeDetails": {
         "restaurantId": "408386",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 9300
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 9300
         },
         "parentId": "7158",
         "avgRatingString": "4.4",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 7.4,
         "serviceability": "SERVICEABLE",
         "slaString": "23 mins",
         "lastMileTravelString": "7.4 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 05:55:00",
         "opened": true
         },
         "badges": {
         "textExtendedBadges": [
         {
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "brand",
         "fontColor": "#7E808C"
         }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {
         "badgeObject": [
         {
         "attributes": {
         "description": "",
         "fontColor": "#7E808C",
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "brand"
         }
         }
         ]
         }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹125 OFF",
         "subHeader": "ABOVE ₹499",
         "discountTag": "FLAT DEAL"
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
         "link": "https://www.swiggy.com/restaurants/noto-healthy-ice-cream-ejipura-koramangla-bangalore-408386",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "59801",
         "name": "Indiana Burgers",
         "cloudinaryImageId": "h3g8hqh8txova02g4v5y",
         "locality": "2nd stage",
         "areaName": "Indiranagar",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "Burgers",
         "American",
         "Fast Food",
         "Beverages",
         "Desserts"
         ],
         "avgRating": 4,
         "feeDetails": {
         "restaurantId": "59801",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 6800
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 6800
         },
         "parentId": "5714",
         "avgRatingString": "4.0",
         "totalRatingsString": "5K+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "5.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 05:00:00",
         "opened": true
         },
         "badges": {
         "textExtendedBadges": [
         {
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "options available",
         "fontColor": "#7E808C"
         }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {
         "badgeObject": [
         {
         "attributes": {
         "description": "",
         "fontColor": "#7E808C",
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "options available"
         }
         }
         ]
         }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40"
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
         "link": "https://www.swiggy.com/restaurants/indiana-burgers-2nd-stage-indiranagar-bangalore-59801",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "448216",
         "name": "Momo Zone - The Momo Company",
         "cloudinaryImageId": "hi85rwc7kdc9pqomvdzv",
         "locality": "CMH Road",
         "areaName": "Indiranagar",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "Chinese",
         "Tibetan",
         "Fast Food"
         ],
         "avgRating": 4,
         "feeDetails": {
         "restaurantId": "448216",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 6800
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 6800
         },
         "parentId": "382343",
         "avgRatingString": "4.0",
         "totalRatingsString": "100+",
         "sla": {
         "deliveryTime": 33,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "33 mins",
         "lastMileTravelString": "5.7 km",
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
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
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
         "link": "https://www.swiggy.com/restaurants/momo-zone-the-momo-company-cmh-road-indiranagar-bangalore-448216",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "504",
         "name": "Kaati Zone Rolls & Wraps",
         "cloudinaryImageId": "b6k8zthuykiitlfdgqxm",
         "locality": "CMH Road",
         "areaName": "Indiranagar",
         "costForTwo": "₹150 for two",
         "cuisines": [
         "Fast Food",
         "Bengali",
         "Beverages",
         "Desserts"
         ],
         "avgRating": 4,
         "feeDetails": {
         "restaurantId": "504",
         "fees": [
         {
         "name": "BASE_TIME"
         },
         {
         "name": "BASE_DISTANCE",
         "fee": 6800
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 6800
         },
         "parentId": "248306",
         "avgRatingString": "4.0",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 27,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "27 mins",
         "lastMileTravelString": "5.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2023-09-19 05:00:00",
         "opened": true
         },
         "badges": {
         "textExtendedBadges": [
         {
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "options available",
         "fontColor": "#7E808C"
         }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
         "imageBased": {},
         "textBased": {},
         "textExtendedBadges": {
         "badgeObject": [
         {
         "attributes": {
         "description": "",
         "fontColor": "#7E808C",
         "iconId": "guiltfree/GF_Logo_android_3x",
         "shortDescription": "options available"
         }
         }
         ]
         }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "40% OFF",
         "subHeader": "UPTO ₹80"
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
         "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-cmh-road-indiranagar-bangalore-504",
         "type": "WEBLINK"
         }
         },
         {
         "info": {
         "id": "60660",
         "name": "Cupcake Bliss Cake & Desserts",
         "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
         "locality": "2nd stage",
         "areaName": "Indiranagar",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Bakery",
         "Desserts",
         "Ice Cream",
         "Beverages"
         ],
         "avgRating": 4,
         "feeDetails": {
         "restaurantId": "60660",
         "fees": [
         {
         "name": "BASE_DISTANCE",
         "fee": 6800
         },
         {
         "name": "BASE_TIME"
         },
         {
         "name": "ANCILLARY_SURGE_FEE"
         }
         ],
         "totalFee": 6800
         },
         "parentId": "66732",
         "avgRatingString": "4.0",
         "totalRatingsString": "1K+",
         "sla": {
         "deliveryTime": 30,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "30 mins",
         "lastMileTravelString": "5.7 km",
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
         "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-2nd-stage-indiranagar-bangalore-60660",
         "type": "WEBLINK"
         }
         },
];
   
   

  //passing restaurant data in form of json file 
//body
const Body = () =>
(
  <div className="body">
    <div className="search">Search</div> 
      <div className="rest-container">
         <RestaurantCard resData={resList[0]}/>
         <RestaurantCard resData={resList[1]}/>
         <RestaurantCard resData={resList[2]}/>
         <RestaurantCard resData={resList[3]}/>
         <RestaurantCard resData={resList[4]}/>
         <RestaurantCard resData={resList[5]}/>
         <RestaurantCard resData={resList[6]}/>
         <RestaurantCard resData={resList[7]}/>
         <RestaurantCard resData={resList[8]}/>
        
         
      </div>     
  </div>
);


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


