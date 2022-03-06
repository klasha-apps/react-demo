import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cart'
import Cart from '../Cart'
import CartIcon from './CartIcon'

const Header = () => {

    const [cart] = useCart()
    const [open, setOpen] = useState(false)

    const toggleCart = () => setOpen(!open)

    return (
        <div className='sticky top-0 z-50 pt-8 pb-1 bg-white'>
            <div className='flex items-center flex-auto justify-between mb-16 sm:mb-20 sm:w-2/5 mx-auto px-3 sm:px-0 relative'>
                <Link to='/'>
                    <div className='flex items-center gap-3'>
                        <img src='/assets/images/k-logo.svg' alt='k logo' />
                        <span className='text-xl'>Store</span>
                    </div>
                </Link>
                <div
                    className='flex items-center gap-2 text-sm text-gray-400 cursor-pointer'
                    onClick={toggleCart}
                >
                    <CartIcon color={'#000000'} />
                    <span>Cart</span>
                    <span className='h-4 w-4 rounded-full bg-custom-one text-center text-xs text-white'>{cart.length}</span>
                </div>

                <div className={`bg-white shadow-lg absolute top-10 right-0 w-full h-56 xl:w-3/4 z-10 p-3 ${open ? 'open' : 'hidden'}`}>
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default Header