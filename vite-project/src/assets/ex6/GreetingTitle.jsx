import { useEffect, useState } from "react";


const GreetingTitle = () =>{
    const [name, setName] = useState("")
    const [greeting, setGreeting] = useState("hello")

    useEffect(() => {
        if(!name){
            document.title= "welcome" 
        }
            else{
                document.title = `${greeting} ${name}`;
            }
        
    }, [greeting, name])

    return(
        <>
            <h2>Enter YOur Name</h2>
            <input type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <h2>Choose a Greeting</h2>
            <input type="text" 
            value={greeting}
            onChange={(e)=> setGreeting(e.target.value)}
            />
         
         </>
    )
}

export default GreetingTitle