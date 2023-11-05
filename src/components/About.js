import React from "react";
import User from "./User";
import UserClass from "./UserClass";
//import React from "react";
import { Component } from "react";

//create a class based componenet
class About extends Component{
    constructor(props){
        super(props);

        console.log("Parent constuctor is called !")
    }

    componentDidMount(){
        console.log("Parent Componenent Did mount is called !")
    }
    render(){
        console.log("Parent Render is called !")
        return(
            <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
           <User name={"Aarush (function)"}/>

           <UserClass name={"Aarush (class based component)"} location={"Athlone,Ireland"}
           email={"bal.aarush@gmail.com"} interests={"Love Apple Product 📱 👨‍💻 "}/>
            <UserClass name={"Elon Musk (class based component)"} location={"USA"}
           email={"bal.aarush@gmail.com"} interests={"Love Apple Product 📱 👨‍💻 "}/>
            <UserClass name={"Third child (class based component)"} location={"USA"}
           email={"bal.aarush@gmail.com"} interests={"Love Apple Product 📱 👨‍💻 "}/>
        </div>
        );
    }
}
//ends here
//functional Component below but above is class based 
/*const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
           <User name={"Aarush (function)"}/>

           <UserClass name={"Aarush (class based component)"} location={"Athlone,Ireland"}
           email={"bal.aarush@gmail.com"} interests={"Love Apple Product 📱 👨‍💻 "}/>
        </div>
    );
};
*/

/*Lifecycle Method 
- Parent Constructor
- parent render

 - Aarush Constuctor
 - Aarush  Render
 
 - Elon Musk constructor 
 - Elon Musk Render

 - Aarush componentDidMount
 - Elon ComponentDisMount

 - Parent ComponentDid Mount


*/
export default About;