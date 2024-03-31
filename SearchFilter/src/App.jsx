
import { useState } from 'react'
import './App.css'
import {Data} from "./Data"
function App() {

  const [search, setSearch] = useState("");

  return (
    <> 
    <input type="text" className='p-3 rounded-xl' placeholder='Search Contacts'/>
    <form>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
    </table>
    </form>

    </>
  )
}

export default App
