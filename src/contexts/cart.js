import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => setCart(prevCart => [...prevCart, item])
    const removeFromCart = item => setCart(prevCart => prevCart.filter(x => x.id !== item.id))

    return (
        <CartContext.Provider value={[cart, addToCart, removeFromCart]}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartProvider