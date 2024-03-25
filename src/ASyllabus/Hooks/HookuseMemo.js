import { useMemo,useState } from "react"

export default function HookuseMemo(){
    const [add,setAdd]=useState(0)
    const[sub,setSub]=useState(100)

    const multiply=useMemo(function mul(){
        console.log("called")
        return add*10
    },[])
    return(
        <>
        {multiply} <br/>
        <button onClick={()=>setAdd(add+1)}>Addition</button>
        <span>{add}</span> <br/>
        <button onClick={()=>setSub(sub-1)}>Substraction</button>
        <span>{sub}</span>
        </>
    )
}