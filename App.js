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
