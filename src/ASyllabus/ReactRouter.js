//copy paste this into App.js/index.js

import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './ASyllabus/Home'
import About from './ASyllabus/About'
import Contact from './ASyllabus/Contact'
import NavBar from './ASyllabus/NavBar';
function App(){
    return(
        <>
        <BrowserRouter>
        <NavBar/>
        <Routes> {/* Wrap your Routes in a Routes element */}
          <Route path="/Home" element={<Home />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default App;