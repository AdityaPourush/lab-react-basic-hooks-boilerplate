import React,{useState} from "react";
import { useEffect } from "react";

const Effect = () =>{

    const [count, setCount] = useState(0)
    const [age, setAge] = useState(25)

    useEffect(()=>{
        console.log("Component Re-renders");
    })

    useEffect(()=>{
        console.log(age);
    },[])


    useEffect(()=>{
        return()=>{
            console.log("Component-unmounted");
        }
    },[])

    return(
        <>
            <h1>Effect</h1>
            <h3>Count: {count}</h3>
            <h3>Age: {age}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>+</button>
            <button onClick={()=>{
                setAge(age-1)
            }}>Decrease Age</button>
        </>
    )
}

export default Effect;