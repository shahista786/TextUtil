import { useState } from "react";

function useCounter(initialVal=0) {
    const [count, setCount] = useState(initialVal);
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
  return [count,Increment,Decrement]
}

export default useCounter;
