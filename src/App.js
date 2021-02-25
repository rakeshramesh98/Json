import React from 'react'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  const data= [
    {
      "component": "button",
      "block": false,
      "danger": false,
      "disabled": false,
      "ghost": false,
    },
    {
      "component": "dropdown",
      "arrow": false,
      "disabled": false,
      "children":{
        "block": false,
        "danger": false,
        "disabled": false
      },
    }
 
  ]
  return (
    <div className="App">
      {data.map((det,i)=>{
        for (const [key, value] of Object.entries(det)) {
          console.log(`${key}: ${value}`);
         //return <div>{key}:{value}</div>
        }
      })}
      
    </div>
  );
}

export default App;
