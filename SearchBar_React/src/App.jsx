import { useState } from 'react'
import './App.css'
import SearchBar from './Components/SearchBar'
import ResultList from './Components/ResultList'

function App() {

  const [result, setResult] = useState([])
 
  return (
    <div className='App'>
      <div className='search-container'>
        <SearchBar setResult={setResult}/>
        <ResultList />
      </div>
    </div>
  )
}

export default App
