// src/App.js
import React, { useState, useEffect } from 'react';
import Scene from './Cube';
import Demo from './Demo';


function App() {
  const [rotation, setRotation] = useState([]);

  // useEffect(() => {
  //   if(rotation){
  //     if(rotation.length > 0){
  //       console.log(rotation[0].x);
        
  //     }
  //   }
  
  // },[rotation])

  return (
    <div className="App">
      <Demo rotation={setRotation}/>
      <Scene rotation={rotation} />
    </div>
  );
}

export default App;
