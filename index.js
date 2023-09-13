
//javascript code for hello world 
/*const heading = document.createElement("h1");
heading.innerHTML ="Hello world from javascript !";
*/
/*<!--REACT CODE STARTS--> */
   const heading = React.createElement("h1",{},"hello world from React");
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(heading);
