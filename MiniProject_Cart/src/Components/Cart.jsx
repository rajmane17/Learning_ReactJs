import react from "react"
import useItem from "../Context/ItemContext"

function Cart () {

    const cart = useItem();
    return (
        <>
        <h1>My Cart</h1>
        <div className="MyProducts">
            {
                cart && cart.item.map((item)=> <li>{item.name} - Rs{item.price}</li>) 
            }
        </div>
        </>
    )
}

export default Cart