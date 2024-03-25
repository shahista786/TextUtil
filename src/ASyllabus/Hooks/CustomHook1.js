import useCounter from "./useCounter";

export default function CustomHook1() {
    const [count,Increment,Decrement]=useCounter()
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Addition</button>
      <button onClick={Decrement}>Substraction</button>
    </>
  );
}

//App.js
// import CustomHook from "./ASyllabus/Hooks/CustomHook";
// import CustomHook2 from "./ASyllabus/Hooks/CustomHook2";
// export default function App(){
//   return(
//   <>
//     <CustomHook/>
//     <CustomHook2/>
//   </>
//   )
// }
