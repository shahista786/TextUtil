import React, { useState } from "react"; //hook

export default function FormSubmit() {
    // const [text, setText] = useState("Enter name");
    const [name, setName] = useState("");


    const handleChange = (event) => {
        setName(event.target.value); // Use event.target.value to get the input value
    };

    const submit = (e) => {
        e.preventDefault();
        // You can handle form submission logic here
        alert(`Submitted!!..The name you entered was: ${name}`)
    };

    return (
        <>
            <div>
                <form onSubmit={submit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={handleChange} />
                    </label>
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}


//App.js
//  import FormSubmit from "./ASyllabus/FormSubmit";

// function App() {
//   return (
//     <>
//      <FormSubmit/>
//   </>
//   );
// }
// export default App;
