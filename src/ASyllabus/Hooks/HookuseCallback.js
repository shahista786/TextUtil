
// //App.js
// import { useCallback, useState } from "react";
// import HookuseCallback from "./ASyllabus/Hooks/HookuseCallback";

// export default function App() {
//     const [add, setAdd] = useState(0);
//     const [mul, setMul] = useState(1);

//     const addition = useCallback(() => {
//         setAdd(add => add + 1);
//     }, []);

//     const multiply = useCallback(() => {
//         setMul(mul => mul * 2);
//     }, []);

//     return (
//         <>
//             <HookuseCallback addition={addition} multiply={multiply}  /> 
//             <h1>{add}</h1>
//             <button onClick={addition}>Addition +1</button>
//             <h1>{mul}</h1>
//             <button onClick={multiply}>Multiply *2</button>
//         </>
//     );
// }

import { memo } from 'react';

function HookuseCallback({ plus, into }) {
    console.log("Callback Called");

    return (
        <>
        </>
    );
}

export default memo(HookuseCallback);
