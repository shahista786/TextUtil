
//CSSModule.js

import style1 from './Style1.module.css'; 
import style2 from './Style2.module.css'; 
function CSSModule(){
    return (
        <>
        <button className={style1.button}>Click me!</button> <br/><br/>
        <button className={style2.button}>Click me!</button>
        </>

        //  {/* if className is same then it conflicts & won't show any css so we will use this CSS module Styling */}
        // {/* also we will import all css styling in one time inline,internal,external&CSS module */}
        // {/* we want some globally css then we will use external css& for local css we will use CSS module in 1/same program also */}
    )
};

export default CSSModule;

//App.js
// import CSSModule from "./ASyllabus/CSSModule";

// function App() {
//   return (
//     <>
//      <CSSModule/>
//   </>
//   );
// }
// export default App;