import { memo } from "react";

function ReactMemo(props) {
    console.log('props',props)
    return (
        <>
        Test: {props.data} <br/>
        </>
    );
}

export default memo(ReactMemo);
// export default ReactMemo

//copy paste this in App.js
// import { useState } from "react";
// import ReactMemo from "./ASyllabus/ReactMemo";
// function App() {
//   const [count, setCount] = useState(0);
//   const [data,setData]=useState(1)
//   const increment = () => {
//     setData(2)
//     setCount(count+1);
//   };

//   return (
//     <>
//       <ReactMemo data={data}/>
//       <button onClick={increment}>Increment {count}</button>
//     </>
//   );
// };

// export default App;
