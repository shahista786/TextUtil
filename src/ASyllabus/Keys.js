function Keys() {

    const subjects = [
      { id: 1, language: 'JS' },
      { id: 2, language: 'Python' }
    ];

    return (
      <div>
        {subjects.map((lang) => {
          return <div key={lang.id}>
            {lang.id}. {lang.language}
          </div>
        })}
      </div> 
    );

    //or
//     const stringLists = ['ABC','Rohit', 'Sachin', 'Dhoni'];

//     const updatedLists = stringLists.map((strList, index) => {
//         return <li key={index}>{strList}</li>; // Removed unnecessary divs
//     });

//     return (
//         <div>
//             <ul>
//                 {updatedLists}
//             </ul>
//         </div>
//     );

}

export default Keys;

//App.js
// import Keys from "./ASyllabus/Keys";

// function App() {
//   return (
//     <>
//      <Keys/>
//   </>
//   );
// }
// export default App;