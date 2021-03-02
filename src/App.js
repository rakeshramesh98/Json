import React, { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css';
import {PlusCircleOutlined} from "@ant-design/icons"
import getJsonIterable from './utils.js'
function App() {
var [flag,setFlag]=useState("array")
var [click,setClick]=useState("clicked")
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
const handleClick=()=>{
setClick("not")
return <div>{click}</div>
}

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
        if(value.includes("{")&&(value.length>2)||value.includes("}")){
          return(
            <div className="objects">
             {value.map((value2,i)=>{
               if(value2===""){
                return <span className="space"></span>
              }
              else if(value2==="{"){
                return <span className="brackets">:{value2}</span>
              }
              else if(value2==="}"){
               return <span className="brackets">{value2}</span>
             }
             else
                return <span>{value2}</span>
              })}
            </div>
          )
        }
        else if(value.includes("[")||value.includes("]")){
          return(
            <div className="array">
             {value.map((value2,i)=>{
               if(value2===""){
                return <span className="space"></span>
              }
              else if(value2==="["){
                return <span className="brackets">:{value2} <PlusCircleOutlined onClick={()=>handleClick}/></span>
              }
              
              else if(value2==="]"){
               return <span className="brackets">{value2}</span>
             }
             else
                return <span>{value2}</span>   
              })}
            </div>
          )
        }
        else if((value.length<=2)){
          return(
            <div>
             {value.map((value2,i)=>{
                if(value2==="{"||value2==="}"){
                  return <span className="brackets">{value2}</span>
                } 
              })}
            </div>
          )
        }
        else{
          value.splice(-1,0," : ")
          return(
            <div className="others">
             {value.map((value2,i)=>{
                if(value2===""){
                  return <span className="space"></span>
                }
               else if(value2===true){
                return <span>true</span>
               }
               else{
                return <span>{value2}</span>
               }
                   
              })}
              
            </div>
          )
        }

        
      })} 
    </div>
  )
}

export default App;
