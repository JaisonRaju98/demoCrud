import { memo } from "react";

const Child = ({x}) => {
    console.log("child rendered");

    return (  
        <div>
            <h1>x:{x}</h1>
        </div>
    );
}
 
export default memo(Child);