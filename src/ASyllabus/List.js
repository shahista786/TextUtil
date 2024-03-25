
function List() {
    const languages = ['JS', 'Python', 'Java','HTML'];
    // const numbers=[1,2,3,4]
    return (
      <div>
        {languages.map((language) => {
          return <div>I like {language}</div>
        })}
      </div>
    );

  //   const list=numbers.map((items)=>        //item variable act like i in for loop
  //   <li>{items}</li>
  //   )
  //   return <ul>{list}</ul>
}

export default List;

//App.js
//  import List from "./ASyllabus/List";

// function App() {
//   return (
//     <>
//      <List/>
//   </>
//   );
// }
// export default App;
