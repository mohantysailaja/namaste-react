import React from 'react';
import ReactDOM  from 'react-dom/client';

//React.createElement => Obect => HTMLElement(render) 

const heading =React.createElement(
"h1",{id:"heading"},
"Namaste React 🧨"
);

//JSX - is not HTML ,it is HTML -like or XML - like syntax-(trnspiled before it reaches the JS)-PARCEL - BABEL 
//JSX =>Babel transpiles it to React.craeteElement => RReactElement.js object => hTML Element(render)
//JSX => (transpiled before it reaches the JS )-PARCEL - BABEL
const jsxheading = (<h1  className="head" tabIndex="1">
   Namaste React using jsx ☘️</h1>);
console.log(jsxheading);


//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(jsxheading);
