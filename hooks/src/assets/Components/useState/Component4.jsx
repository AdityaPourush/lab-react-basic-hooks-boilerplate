import React, {useContext, useState} from "react"
import { useEffect } from "react"
import { AppContext } from "../useContext/useContext"

const Counter4 = () =>{

    const[age, getAge] = useState(20)
    const[sib, getSib] = useState(1)

    const {setMainCount, mainCount} = useContext(AppContext)

    useEffect(()=>{
        return()=>{
            console.log("Component 4 Unmounted");
        }
    },[])

    return (
        <>
            <h1>Counter4</h1>
            <h2>Age : {age}</h2>
            <h2>Sibling : {sib}</h2>
            <button onClick={()=>{
                getAge((prev)=> prev+1)
            }}>Get Older</button>
            <button onClick={()=>{
                getSib((prev) => prev+1)
            }}>Get MOre Sib</button>

            <button onClick={()=>{
                getAge(age - age),
                getSib(sib - sib)
            }}>Reset</button>

            <button onClick={()=>{
                setMainCount(mainCount+1000)
            }}>+ Main Count</button>
        </>
    )
}

export default Counter4;