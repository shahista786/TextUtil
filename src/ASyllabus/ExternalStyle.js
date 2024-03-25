//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>CSS Stylesheet/External CSS</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <App/> */}
  </React.StrictMode>
);


//App.css
// body {
//     background-color: black;
//     color: white;
//     text-align: center;
//   }
//   h1{
//     background-color: red;
//   }