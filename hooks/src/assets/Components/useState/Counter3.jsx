import React, {useState} from "react"
import { useContext } from "react"
import { AppContext } from "../useContext/useContext"

const Counter3 = () => {

    const [data, setData] = useState({age:20, sibling:1})
    const {decreaseCount} = useContext(AppContext)

    // const handleAge = ()=>{
    //     setData({
    //         ...data,
    //         age:data.age+1
    //     })
    // }

    // const handleSibs = ()=>{
    //     setData({
    //         ...data,
    //         sibling:data.sibling+1
    //     })
    // }

    const handleData = (key)=>{
        setData({
            ...data,
            [key] : data[key] + 1
        })
    }

    return(
        <>
            <h1>Counter-3</h1>
            <h2>My Age : {data.age}</h2>
            <h3>Siblings: {data.sibling}</h3>
            <button onClick={()=>{handleData("age")}}>Get Older</button>
            <button onClick={()=>{handleData("sibling")}}>Get More Siblings</button>
            <button onClick={decreaseCount}>- Main Count</button>
        </>
    )
}

export default Counter3;