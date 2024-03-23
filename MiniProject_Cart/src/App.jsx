import './App.css'
import Items from './Components/Items'
import Cart from "./Components/Cart"

function App() {

  return (
   
   <>
   <h1>Products</h1>
   <Items name= "MacBook" price={150000}/>
   <Items name= "Pendrive" price={600}/>
   <Items name= "Mobile" price={35000}/>
   <Cart/>
   </>
  )
}

export default App
