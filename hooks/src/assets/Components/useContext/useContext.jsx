import React, { createContext, useState } from "react";

export const AppContext = createContext()

const ParentContext = ({children}) => {

    const [mainCount, setMainCount] = useState(50000)
    const decreaseCount = ()=>{
        setMainCount(mainCount-1000)
    }
    const [isDark, SetisDark] = useState(true);

    return(
        <AppContext.Provider value={{mainCount, setMainCount, decreaseCount, isDark, SetisDark}}>
            {children}
        </AppContext.Provider>
    )
}

export default ParentContext;