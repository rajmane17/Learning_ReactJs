
import { useState } from 'react'
import './App.css'

function App() {

  const [print, setPrint] = useState("")
  const [background, setBackground] = useState("red")

  function Display () {
    setPrint("Hello World");
  }

  function Clear(){
    setBackground("")
  }

  return (
    <> 
    <div className='border-white h-full w-full bg-red-800 p-4 rounded-xl' >
      <h1 className='font-bold my-3'>{print}</h1>
      <button onClick={Display} className={`mx-2 my-2`}>Display</button>
      <button onClick={()=> {
        setPrint("")
      }}>Clear</button>
      <button className={`mx-2 my-2`} onClick={() =>{
        //
      } 
      }>Edit</button>
      <button className={`mx-2 my-2`} onClick={Clear} >Clear Bg</button>
    </div>
    </>
  )
}

export default App
