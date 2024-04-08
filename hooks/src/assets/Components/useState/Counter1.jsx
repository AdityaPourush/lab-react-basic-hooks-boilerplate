import React, {useState} from "react";

const Counter1 = () => {

    let [currAge, setCurrAge] = useState(20);

    const decreaseAge = ()=> {
        setCurrAge(currAge-1)
        console.log('currAge :', currAge);
    }

    const Increase10Years = ()=> {
        // setCurrAge(currAge+10)
        for(let i = 0;i < 10; i++){
            // setCurrAge(currAge+1)
            setCurrAge((prev)=>(prev)+1)
        }
    }

    return(
        <div style={{
            border: "1px dashed white",
            padding: "10px",
            margin: "20px",
            // backgroundColor: `${}`
        }}>
            <h1>Counter1</h1>
            <h2>Age : {currAge}</h2>
            <button onClick={()=>{
                setCurrAge(currAge+1)
            }}>Get Older</button>

            <button onClick={decreaseAge}>Get Younger</button>
            <button onClick={Increase10Years}>Get Older by 10 years</button>
            
        </div>
    )
}

export default Counter1;