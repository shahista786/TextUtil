// // default code when installed react.app
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode,setMode]=useState('light')
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <NavBar title="TextUtils" home="Home" about="About" mode={mode} toggle={toggle} />
      {/* <NavBar/> */}
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
