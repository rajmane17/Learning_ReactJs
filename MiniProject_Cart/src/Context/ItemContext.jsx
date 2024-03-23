import { useContext, createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = (props) => {

    const [item, setItem] = useState([])

    return (
        <ItemContext.Provider value={{item, setItem}}>
            {props.children}
        </ItemContext.Provider>
    )

}

export default function useItem() {
    return useContext(ItemContext)
}

