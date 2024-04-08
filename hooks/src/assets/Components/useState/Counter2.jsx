import React, {useEffect, useState, useContext} from "react";
import { AppContext } from "../useContext/useContext";

const Counter2 = ()=>{

    const[currAge, setAge] = useState(20);
    const[currSib, setSib] = useState(1);

    const {mainCount} = useContext(AppContext)

    const handleAge = ()=>{
        setAge(currAge+1);
    }

    const handleSibs = ()=>{
        setSib(currSib+1);
    }

    useEffect(()=>{
        console.log("Component 2 has Mounted");
    },[])

    return(
        <>
            <h1>Counter-2</h1>
            <h3>My Current Age is {currAge}</h3>
            <h3>My Siblings {currSib}</h3>
            <h3>Main Count : {mainCount}</h3>

            <button onClick={handleAge}>Get Older</button>
            <button onClick={handleSibs}>Get More Siblings</button>
            <button onClick={()=>{
                setSib(currSib-1)
            }}>Decrease Siblings</button>
        </>
    )
}

export default Counter2