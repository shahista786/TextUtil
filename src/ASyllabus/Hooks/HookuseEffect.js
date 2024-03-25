// import { useState,useEffect } from "react";

// export default function HookuseEffect(){
//     const [inc,setInc]=useState(0)
//     const [dec,setDec]=useState(100)
//    const setIncrement=()=>{
//         setInc(inc+1)
//     }
//     const setDecrement=()=>{
//         setDec(dec-1)
//     }
//     useEffect(()=>{
//         console.log("Mounted")
//     },[inc,dec])
//     return(
//         <>
//         <h1>Increment by 1 - {inc}</h1>
//         <button onClick={setIncrement}>Increment</button>
//         <h1>Decrement by 1 - {dec}</h1>
//         <button onClick={setDecrement}>Decrement</button>
//         </>
//     )
// }

//App.js
// import HookuseEffect from "./ASyllabus/Hooks/HookuseEffect";

// export default function App(){
//   return(
//   <>
//   <HookuseEffect/>
//   </>
//   )
// }

//Effect Cleanup

import { useState, useEffect } from "react";

export default function HookuseEffect() {
  const [count, setCount] = useState(0);
//   const [data, setData] = useState(0);
useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}