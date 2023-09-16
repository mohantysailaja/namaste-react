import React from "react";
import ReactDOM  from "React-dom/client";


//React elemennt
const elem = <span>My Span elemenet !!</span>;
//React Element 

const jsxheading = (<h1  className="heading" tabIndex="1">
   Namaste React using jsx ☘️</h1>);
console.log(jsxheading);
//React elemenet inside an elemenet
/*const title = 
 (<h1  className="heading" tabIndex="1">

   Namaste React using JSX  ☘️
  
   </h1>
 
 );
 */
//console.log(jsxheading);

//Titel Functional component , the </Title after where you wanna put
const Title = () =>
 (<h1  className="heading" tabIndex="1">
   Namaste React using JSX  ☘️</h1>);
console.log(jsxheading);

/*const fn1 =()=>{
   return true;
};
*/
//same as 
/*const fn2 =()=> true;*/


//React Functional Component

/*
//this is good syntax with return 
const HeadingComponent = () =>{
   return <h1 className="heading">Namaste Recat Functional Component</h1>
};
*/
//same as 
//Component Composition(one component withing another)
//<Title />
//<Title></Title> are both ways and we can write multiple times
//we can call javascript  function {Title()} like this as Title is a function at the end of the day !
const x = 1200;
const HeadingComponent = () =>  (
<div id="container">
  <Title></Title>
  <Title />      
   {Title()}   
     <h1 className="heading">Namaste React Functional component 🦋</h1>
</div>
);
 

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jxheading);
//rendering functional component
root.render(<HeadingComponent />);

