import React from 'react'
import './App.css'
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
//console.log(x)
  return (
    <div className="main">
      {x.map((value)=>{
        const lastItem = value[value.length - 1]
        if(lastItem=="]"||lastItem=="}"){
          value.splice(-2, 1);
        }
        else{
          value.pop()
        }
        
        return(
          <div className="outer">
           {value.map((value2,i)=>{
              if(value2===""){
                return <span className="empty-span"></span>
              }
              else if(value2==="{"||value2==="["){
                return <span>:{value2}</span>
              }
              else if(value2==="}"||value2==="}"){
               return <span>{value2}</span>
             }
                 return <li className="inner"><span className={`class${i}`}>{value2}</span></li>
            })}
          </div>
        )
      })} 
    </div>
  )
}

export default App;
