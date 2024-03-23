import react from "react"
import useItem from "../Context/ItemContext"

const Items = (props) => {

  const cart = useItem()

    return(
        <div>
        <div id='item-list'>
          <h2>Name: {props.name}</h2>
          <p>Price: Rs {props.price}</p>
          <button onClick={()=> {
            cart.setItem([...cart.item, {name :props.name, price :props.price}])
          }}>Add To Cart</button>
        </div>
        </div>

    )
}

export default Items