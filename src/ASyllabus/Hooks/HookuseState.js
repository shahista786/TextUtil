import { useState, useEffect } from "react";

export default function HookuseState() {
    // const name=useState("Shahista") //state variable declaring with  default/initial value
    const [name, setName] = useState("ABC");
    const [color, setColor] = useState("blue"); //array-destructuring with No default value
    //any data type string,array,object,numbers etc

    //update value-using event/ using useEffect
    //text="New text" - wrong way to change text
    //useText=("New Text") - right way to change text
    const handleClick = () => {
        setColor("red");
    };

    useEffect(() => {
        setName("Lovish");
    }, []);

    //what state can hold hooks
    const [brand, setBrand] = useState("Ford");
    const [year, setYear] = useState(1964);
    const [isToggleOn, setIsToggleOn] = useState(false);
    const [list, setList] = useState(["Apple", "Banana", "Orange"]);
    const [car, setCar] = useState({
        brand: "Hyundai",
        year: "1967",
        color: "red",
    });

    //Updating Objects and Arrays in State
    const addItem = () => {
        if (!list.includes('Mango')) {
            setList([...list, 'Mango']);
          }
    };
    const updateColor = () => {
        setCar((previousState) => {
            return { ...previousState, color: "blue" };
        });
    };
    return (
        <>
            <h1>My name is {name}</h1>
            <h2>My favorite color is {color}</h2>
            <button onClick={handleClick}>Change color</button>

            {/* Data types used in useSatate */}
            <h1>It is a {brand} Brand from {year}</h1>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
            <h1>Array has :{""+list}</h1>
            {/* or */}
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h1>It is a {car.brand} Brand from {car.year} with color {car.color}</h1>

            {/* update object&array data on button click */}
            <button onClick={addItem}>Add Item</button>
            <button onClick={updateColor}>Change color</button>
            {/* or */}
            <button onClick={() => setCar({ ...car, year: "2024" })}>Change year</button>
        </>
    );
}

//App.js
// import HookuseState from "./ASyllabus/Hooks/HookuseState";

// export default function App(){
//   return(
//   <>
//   <HookuseState/>
//   </>
//   )
// }
