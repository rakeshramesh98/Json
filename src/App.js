import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import getJsonIterable from './utils.js'
function App() {
  const data = {
    application: {
      //object
      name: "website", //string
      bootstrap: true, //boolean
      rootComponent: {
        //object
        name: "viewport", //string
        bindings: { input: [], output: [] },
        properties: [],
        methods: [],
        components: [],
      },
      bindings: { input: [], output: [] },
    },
  };
const x=getJsonIterable(data, 0, "", "data")
console.log(x)
  return (
    <div className="main">
      {x.map((value)=>{
        return(
          <div className="outer">
           {value.map((value2,i)=>{
                return <div className="inner">{`\" `}{value2}{`\,`}</div>
            })}
          </div>
        )
      })} 
    </div>
  )
}

export default App;
