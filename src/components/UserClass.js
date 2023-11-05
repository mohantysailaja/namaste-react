
import React from "react";

//extends keyword used to : to make react know that it is a class based component,now react wil start tracking it
//React.component is a class inside react package
class UserClass extends React.Component
{
    //constructor will receive the props
    constructor(props){
        super(props);
        //state is a reserved word here ,is big object which conatains all
        this.state = {
           count : 0,
           count2 : 2,
           count3 : 3 ,
        };
        console.log(this.props.name + "Child Constuctor");

       // console.log(props);
    }
    //
    componentDidMount(){
        console.log( this.props.name + "child ComponentDidMount is called ")

        //Api call
    }

    //reder method is used to render some piece of jsx
   render(){
    //we can destructure instaed of  <h1>Count:{this.state.count}</h1> sown
    //const {name,location,email} = this.props;
    const{count , count2} = this.state;

    console.log(this.props.name  + "Child Render method is called");
    return(
        <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={()=>{
            //NEVER UPDATE STATE VARIABLE DIRECTLY 
            this.setState({
                count: this.state.count + 1,
                //count: this.state.count + 2,
                });
        }}
        >
            Click me Count will increase !!</button>
        <h1>Count2:{count2}</h1>
        <h2>Name: {this.props.name} </h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact:+353 0899441307</h3>
        <h3>Hobbies:Guitar,basket ball,soccer,drawing,reading</h3>
        <h3>Email:{this.props.email}</h3>
      </div>
    );
   }
}
export default UserClass;