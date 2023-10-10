import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Namaste React Web Series</h2>
           <User name={"Aarush (function)"}/>

           <UserClass name={"Aarush (class based component)"} location={"Athlone,Ireland"}
           email={"bal.aarush@gmail.com"}/>
        </div>
    );
};

export default About;