import { useState } from "react";

const Parent = () => {

    let[x, setX]= useState(10);
    let[y, setY]=useState(100);

    console.log("parent comp rendered");


    return ( 
        <div>
            <h1>PARENT COMPONENT</h1>
            <h1>x:{x}</h1>
            <h1>y:{y}</h1>
            <hr />
            <button onClick={()=>setX{x+10}}>change x</button>

            <button onClick={()=>setX{y+100}}>change y</button>
            
            <Child x={x} y={y}/>
        </div>
    
     );
}
 
export default Parent;