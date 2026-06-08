import { useEffect, useState } from "react";

const MouseTracker = () => {

    const  [move, setMove] = useState({ x:0, y:0 });

   

    useEffect( ()=> {
         const mousehandle = (e)=>{
        setMove({x: e.clientX, y: e.clientY});
    }
        window.addEventListener( "mousemove" , mousehandle)

        return ()=>{
            window.removeEventListener("mousemove", mousehandle)
        };
    
    },[]);



return (
    <div>
        <p>Mouse X: {move.x}</p>
        <p>mouse Y: {move.y}</p>
    </div>
)
}


export default MouseTracker