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
import Alert from "./Components/Alert";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)

  const showAlert=(messsage,type)=>{
    setAlert({
      msg:messsage,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode has been Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been Enabled","success")
    }
  }
  return (
    <>
      <NavBar title="TextUtils" home="Home" about="About" mode={mode} toggle={toggle} />
      {/* <NavBar/> */}
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
