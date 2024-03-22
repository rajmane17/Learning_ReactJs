import { createContext, useState } from "react";

export const counterContext = createContext()

export const CounterProvider = (props) => {

    const [count, setCount] = useState(5)

    return (
        <counterContext.Provider value={{count, setCount, name:"Raj"}}>
            {props.children}
        </counterContext.Provider>
    )
}

