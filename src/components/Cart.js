import React,{useState,useEffect} from 'react'

const Cart = ({cart}) => {
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(() => {
        const Subtotal=  cart.reduce(
         (previous, current)=>previous+current.price*qty, 
         0);
           setTotalPrice(Subtotal)
         
     }, [cart])

    return (
        <div>
            cart
            
        </div>
    )
}

export default Cart
