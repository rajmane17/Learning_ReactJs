
import './App.css'
import Counter from "./Components/Counter"
import { useContext } from 'react'
import { counterContext } from './Contexts/CounterContext'

function App() {

  const CounterData = useContext(counterContext)
  console.log(CounterData)

  return (
    <>

    <h1>Counter is {CounterData.count}</h1>
    <Counter />
    <Counter />
    <Counter />
    <Counter />

    </>
  )
}

export default App
