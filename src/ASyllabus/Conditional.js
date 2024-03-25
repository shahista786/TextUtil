import { useState } from "react";
function Conditional() {
    const [loggedIn] = useState(true);
    // const[loggedIn]=useState(2) //1,2,3
    // const cars = ['Ford', 'BMW'];

    //if statement
    // if (loggedIn) {
    //     return (
    //         <div>
    //             <h1>Logged In</h1>
    //         </div>
    //     );
    // }
    // return (
    //     <div>
    //         <h1>Not logged In</h1>
    //     </div>
    // );

    // if else statement
    // if(loggedIn){
    //     return(
    //         <div>
    //             <h1>Logged In</h1>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>Not logged In</h1>
    //         </div>
    //     )
    // }

    // //ternary operator
    return(
        <div>
            {loggedIn?<h1>LoggedIn</h1>:<h1>Not Logged In</h1>}
        </div>
    )

    //ternary operator like if..elseif...else
    // return(
    //     <div>
    //         {loggedIn===1?<h1>LoggedIn user 1</h1>:loggedIn===2?<h1>LoggedIn user 2</h1>:<h1>Not Logged In user 3</h1>}
    //     </div>
    // )

    //logical operator &&
    // return (
    //     <>
    //       <h1>Garage</h1>
    //       {cars.length > 0 &&   //If cars.length > 0 is equates to true, the expression after && will render.
    //         <h2>
    //           You have {cars.length} cars in your garage.
    //         </h2>
    //       }
    //     </>
    // )
}
export default Conditional;

//App.js
//  import Conditional from "./ASyllabus/Conditional";

// function App() {
//   return (
//     <>
//      <Conditional/>
//   </>
//   );
// }
// export default App;
