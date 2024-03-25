import { useContext } from "react";

import  {data1,data2} from "./HookuseContext1"

export default function HookuseContext3(){
    const fName=useContext(data1)
    const old=useContext(data2)
    return(
        <>
        <h1>My name is {fName} and I am {old} year's old....Again</h1>
        </>
    )
}