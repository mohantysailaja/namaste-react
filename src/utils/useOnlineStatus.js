 // create my own custom hook
 //finalize the contarct /input /output 
 //online 

  import { useEffect, useState } from "react";

 const useOnlineStatus = ()=>{

    //local state variable
    const[onlineStatus,setOnlineStatus]= useState(true);

    //check if online 
   useEffect(() => {
        
    window.addEventListener("offline", ()=> {
        setOnlineStatus(false);
    })

    window.addEventListener("online",()=> {
         setOnlineStatus(true);
    })
   }, []);


    //boolean value
    return onlineStatus;

 }
 export default useOnlineStatus;