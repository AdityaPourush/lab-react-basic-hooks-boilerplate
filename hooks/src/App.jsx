import { useContext, useState } from 'react'
import './App.css'
import Counter1 from "./assets/Components/useState/Counter1"
import Counter2 from "./assets/Components/useState/Counter2"
import Counter3 from "./assets/Components/useState/Counter3"
import Counter4 from "./assets/Components/useState/Component4"
import Effect from "./assets/Components/useSffect/Effect"
import ParentContext, { AppContext } from './assets/Components/useContext/useContext'

function App() {

  const [show, setShow] = useState(true)
  const {isDark, SetisDark} = useContext(AppContext)

  return (
    <>
      <button onClick={()=>{
        setShow(!show)
      }}>Change</button>

      <button onClick={()=>{
        SetisDark(!isDark)
      }}>{isDark?"Light Theme":"Dark Theme"}</button>

      {!show ? (<>
      <Counter4/>
      <Counter3/>
      <Counter1/>
      <Counter2/>
      </>)
      :(
        <>
          <Effect/>
          {/* <ParentContext/> */}
        </>
      ) }
      
    </>
  )
}

export default App
