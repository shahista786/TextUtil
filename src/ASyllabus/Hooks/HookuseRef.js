import { useState, useEffect, useRef } from "react";
import App from "../../App";
    
// export default function HookuseRef(){
//     //Does Not Cause Re-renders
//     const [data,setData]=useState("")
//     // const [count,setCount]=useState()
//     const count=useRef(0)
//     useEffect(()=>{
//         // setCount(count+1)   //execute infinitely
//         count.current=count.current+1
//     })
//     return(
//         <>
//         <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
//         <p>Render Count:{count.current}</p>
//         </>
//     )
// }

//Used to access DOM element directly
// export default function HookuseRef(){
//     const [name,setName]=useState("Shahista")
//     const inputElem=useRef()

//     const reset=()=>{
//         setName("")
//         inputElem.current.focus();
//     }
//     const changeColor=()=>{
//         inputElem.current.style.color="red"
//     }
//     const changeBg=()=>{
//         inputElem.current.style.backgroundColor="pink"
//     }
//     return(
//         <>
//         <input type="text" ref={inputElem} value={name} onChange={(e)=>setName(e.target.value)} />
//         <button onClick={reset}>Reset</button>
//         <button onClick={changeColor}>Change Color</button>
//         <button onClick={changeBg}>Change Background</button>
//         </>
//     )
// }

//Tracking State Changes

export default function HookuseRef() {
    const [inpVal, setInpVal] = useState("");
    const preInpVal = useRef("");

    useEffect(() => {
        preInpVal.current = inpVal;
    }, [inpVal]);

    return (
        <>
            <input
                type="text"
                value={inpVal}
                onChange={(e) => setInpVal(e.target.value)}
            />
            <h2>Current characters: {inpVal}</h2>
            <h2>Previous characters: {preInpVal.current}</h2>
        </>
    );
}

// App.js

// import HookuseRef from "./ASyllabus/Hooks/HookuseRef";

// export default function App(){
//   return(
//   <>
//     <HookuseRef/>
//   </>
//   )
// }