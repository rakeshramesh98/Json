var names = ['Jeevan','India','Cognizant','Hyderabad','Asia','Earth','World'];
 
var len = names.length;
 
// initialize,test, increase
 
var i;
 
// for(i=0;i<len;i++){
//     console.log(i+" " +names[i]);
// }
 
// for(i=0;i<len;i++){
//     if(i%2==0){
//         console.log(i+" "+names[i]);
//     }
//     else{
//         console.log(i);
//     }
// }
 
// for (i=len-1;i>=0;i--){
//     console.log(i+" "+names[i]);
// }
 
//** Objects for loop
 
var newobj = {"name":"Jeevan", "place":"Tirupati", "age": 23};
console.log(newobj);
 
//there is no property length in objects
 
let j;
for(j in newobj){
    console.log(j);
    console.log(newobj[j]);
}
 
var newarrobj = ['maths','english',{"science":'physics','nature':'biology',"social":"history"}];
let k;
// for(k in newarrobj){
//     console.log(k);
//     console.log(k,newarrobj[k]);
// }
newarrobj.map((det,i)=>{
    for (const [key, value] of Object.entries(det)) {
        console.log(`${key}: ${value}`);
       //return <div>{key}:{value}</div>
      }
})
