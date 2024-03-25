import { useState } from "react";

export default function TextAreaSelect(){
    const [textArea,setText]=useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
        // console.log(textArea)
    }
    const [gender,setGender]=useState("")
    const handleChoice=(e)=>{
        setGender(e.target.value)
        alert(gender) //to show selected gender
    }
    return(
        <>
            <form>
                <label>Enter Your Hobbies-</label><br/>
                <textarea value={textArea} onChange={handleChange}> </textarea>
                    <br/><br/>
                <label>Choose Gender-</label>
                <select value={gender} onChange={handleChoice}>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </form>
        </>
    )
}

//App.js
// import TextAreaSelect from "./ASyllabus/TextAreaSelect";

// function App() {
//   return (
//     <>
//      <TextAreaSelect/>
//   </>
//   );
// }
// export default App;