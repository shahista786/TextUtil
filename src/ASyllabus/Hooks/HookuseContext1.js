import { createContext, useState } from "react";
import HookuseContext2 from "./HookuseContext2";

//create,provide,useContext

const data1=createContext(); //create
const data2=createContext();

export default function HookuseContext1(){
    const [name, setName] = useState("Shahista");
    const [age,setAge]=useState(25)
    return(
        <>
        {/* provider */}
        <data1.Provider value={name}>   
            <data2.Provider value={age}>
            <h1>My name is {name} and I am {age} year's old</h1>
                <HookuseContext2/>
            </data2.Provider>
        </data1.Provider>
        </>
    )
}
export {data1,data2}


//App.js
// import HookuseContext from "./ASyllabus/Hooks/HookuseContext";

// export default function App(){
//   return(
//   <>
//   <HookuseContext/>
//   </>
//   )
// }