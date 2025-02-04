import { useState } from "react";


interface cmd{
  f_name:string;
  l_name:string;
}

function metadata2 (para1:number,para2:number){
  return para1+para2;


}

const OBJ:cmd = {
  f_name:"kkt",
  l_name :"tank"
}

const names: string = "kkt";
const age: number = 20;

function Data() {

    const [counter,setCounter]= useState(0);
  
    function Add(){
      if(counter>=0){
        setCounter(counter+1);
      }
       console.log("clicked")
    }
    function Remove(){
      if(counter>0){
        setCounter(counter-1);
      }
    }
    
   
    
    return(
      
      <>
          <h1>React hooks</h1>
          <h2>butoon value : {counter}</h2>
          <button onClick={Add}>Add</button>
          <button onClick={Remove}>Remove </button>
          <p>name : {names}</p>
         <p>age : {age}</p>
         <p>interface use : {OBJ.f_name}</p>
         <p>here sum is the :{metadata2(2,3)}</p>
      </>
    )
  }
  


export default Data;


