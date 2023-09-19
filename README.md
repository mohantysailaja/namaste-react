# namaste-react 🎸 by Akshay Saini 🚀 Sir !!!



# parcel
- Dev Build
- Local Server link localhost:1234
- HMR = Hot Module Replacement
- File Watching algorithm - written in C++
- caching - Faster Builds
- Iamge Optimization
- Miinification 
- Bundling
- compressing your files
- constistent Hashing
- Code Splitting
- Differentiol Bundling - support older browser (<script type="module">)
- Diagnostics
- Error Handling
- HTTPS://
- parceljs.org (read about here)
- Tree Shaking - remove unused code 
- Differene dev and prod bundles
-  "main": "App.js", removed from app.json file 
- browserslist.dev

/*
import React from 'react';
import ReactDOM  from 'react-dom/client';


//javascript code for hello world 
/*const heading = document.createElement("h1");
heading.innerHTML ="Hello world from javascript !";
*/
/*<!--REACT CODE STARTS--> */
/*nested element using React
<div id="parent">
   <div id="child">
      <h1>
         I am h1 tag !!!
      </h1>
      <h2>
      I am h2 tag !!!
   </div>
    <div id="child1">
      <h1>
         I am h1 tag !!!
      </h1>
      <h2>
      I am h2 tag !!!
   </div>
</div> 
*/
const parent =React.createElement("div",{id:"parent"},
[[
   React.createElement("div",{id:"child"},
   [React.createElement("h1",{},"I am an h1 tag in namste react app!"),
   React.createElement("h2",{},"i am an h2 tag !")]
)],[
   React.createElement("div",{id:"child1"},
   [React.createElement("h1",{},"I am an h1 tag !"),
   React.createElement("h2",{},"i am an h2 tag !")]
)]]
);
console.log(parent);



   const heading = React.createElement("h1",
   {
     id:"heading"
   },"hello world from React");
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);
  // root.render(heading);
   //console.log(heading);//return javascript object 

  /* //on 17th September:
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

*/