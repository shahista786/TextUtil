import { useReducer } from "react";

const initialState=0;
const reducer=(state,action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        default:
            return state
    }
}
export default function HookuseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
      <>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>
      </>
  );
}

// App.js
// import HookuseReducer from "./ASyllabus/Hooks/HookuseReducer";
// export default function App(){
//   return(
//   <>
//     <HookuseReducer/>
//   </>
//   )
// }
