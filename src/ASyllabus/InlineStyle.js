import React from 'react';

export default function InlineStyle() {
    const myStyle={
        color:'red',
        backgroundColor:'blue'
    }
  return (
    <div>
     {/* with the inline style attribute, the value must be a JavaScript object: */}
      <h1 style={{color:'purple'}}>Inline CSS/Styling</h1>


      {/* camelCased Property Names */}
      <p style={{backgroundColor:'red'}}>Inline Styling with camelCased</p>


      {/* also create an object with styling information, and refer to it in the style attribute */}
        <h2 style={myStyle}>Inline Style using JavaScript Object</h2>
    </div>
  );
}


////App.js
// import InlineStyle from './ASyllabus/InlineStyle'
// export default function App(){
//   return(
//     <>
//       <InlineStyle/>
//     </>
//   )
// }
