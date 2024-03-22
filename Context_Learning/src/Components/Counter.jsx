import react from "react"
import { useContext } from 'react'
import { counterContext } from '../Contexts/CounterContext'


function Counter() {

    const CounterData = useContext(counterContext)

    function Increase () {
        CounterData.setCount(CounterData.count + 1)
    }

    function Decrease () {
        CounterData.setCount(CounterData.count - 1)
    }

    return (
        <>
        {/* ye buttons context ke andar se hi apna data read karaenge aur vahi se change karenge */}
        <button onClick={Increase}>Increament</button>
        <button onClick={Decrease}>Decreament</button>
        </>
    )
}

export default Counter