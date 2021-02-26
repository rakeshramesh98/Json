const data= 
    {
        application: { //object
          name: "website", //string
          bootstrap: true, //boolean
          rootComponent: { //object
            name: "viewport", //string
            bindings: { input: [], output: [] }, 
            properties: [],
            methods: [],
            components: [],
          },
          bindings: { input: [], output: [] },
        },
      }
 

var i=0
function printValues(obj,y=1,x=[]) {
    for (var key in obj) {
        if(typeof obj[key] === "boolean"){
            console.log('inisde boolean',obj[key])
            x.push([...(new Array(y).fill("")),key,obj[key]]);
        } 
        else if(typeof obj[key] === "string"){
            console.log('inisde string',obj[key])
            x.push([...(new Array(y).fill("")),key,obj[key]]);
        } 
        
        else if (typeof obj[key] === "object") {
            
           if(Array.isArray(obj[key])) { 
            console.log('inisde array',obj[key])
            x.push([...(new Array(y).fill("")),key,obj[key].map((val)=>{
              return  printValues(val,y++,x)
            })])
           }else{
            console.log('inisde object',key)
             x.push([...(new Array(y).fill("")),key,'\{',printValues(obj[key],y++,x)]);
            x.push([...(new Array(y).fill("")),'\}'])
        }   
        } 
    }
}
const arr=[]
printValues(data,1,arr);
console.log(arr)

// datamap(data);
// function isObj(obj){
//     let k;
//     for(k in obj){
//         // console.log(k);
//         console.log(k+" : "+obj[k]);
//         if(obj[k] instanceof Object){
//            isObj(obj[k])
//         }
//     }
// }
// isObj(data);
// function datamap(){
//     data.map((det,i)=>{
//     for (const [key, value] of Object.entries(det)) {
//         if (typeof det[key] === "object") {
//             datamap(value);   
//         } else {
//             console.log(`${key}: ${value}`);    
//         }
//         console.log(typeof det[key])
        
     
     
//     }
//   })
// }