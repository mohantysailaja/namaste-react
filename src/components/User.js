import { useState } from "react";


const User = ({ name })=>{
    //we can destructure on the fly like (name in place of props) no need of props.name in return comp    
    const[count, setCount] = useState(0);
    const[count2] = useState(1);

    return(
        <div className="user-card">
          <h1>Count:{count}</h1>
          <h2>Name: {name} </h2>
          <h3>Location: Athlone, Ireland</h3>
          <h3>Contact:+353 0899441307</h3>
          <h3>Hobbies:Guitar,basket ball,soccer,drawing,reading</h3>
          <h3>Email:bal.aarush@gmail.com</h3>
        </div>
    )
};
export default  User ;