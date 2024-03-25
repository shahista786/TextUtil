import React, { useState } from "react";

export default function FormHandle () {
    //text="New text" - wrong way to change text
    //useText=("New Text") - right way to change text

    const [text, setText] = useState("ABC");

    const handleForm = (e) => {
        setText(e.target.value ) //adding new text using e-event
    }
        return (
            <form>
                <label>
                    Enter name:
                    <input type="text" value={text} onChange={handleForm} />
                </label>
            </form>
        )
}

//App.js
// import FormHandle from "./ASyllabus/FormHandle";

// function App() {
//   return (
//     <>
//      <FormHandle/>
//   </>
//   );
// }
// export default App;