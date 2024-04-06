import React, { useState } from "react";
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

function SearchBar({setResult}) {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        const data = fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {resp.json()})
        .then((data)=>{
            const result = data.filter((user) =>{
                return(
                    value && user && user.id.toLowerCase().includes(value)
                )
            })
            setResult(result)
        })
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }
    return(
        <>
        <div>
            <FaSearch id="search-icon"/>
            <input type="text" placeholder="Search here" className="search-bar"
             value={input}
             onChange={(e) => {handleChange(e.target.value)}}
             />
        </div>
        </>
    )
}

export default SearchBar