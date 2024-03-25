import useCounter from "./useCounter";

export default function CustomHook2() {
    const [count,Increment,Decrement]=useCounter(10)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Increment}>Addition</button>
      <button onClick={Decrement}>Substraction</button>
    </>
  );
}
