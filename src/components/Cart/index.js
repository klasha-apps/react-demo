import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/cart'
import { currencyFormatter } from '../../utils/helperFunctions'

const Cart = () => {

    const [cart] = useCart()
    const isEmptyCart = cart.length < 1

    return (
        <div className='relative w-full h-full'>
            {isEmptyCart ?
                <span className='text-gray-400'>Cart is empty, add product(s) from the list of available products</span> :
                <div className='overflow-scroll h-48'>
                    {cart.map(item => {
                        return (
                            <div key={item.id} className='grid grid-cols-5 gap-2 my-8'>
                                <div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-3 col-span-4'>
                                    <div className='col-span-2'>
                                        <h3>{item.name}</h3>
                                        <span className='text-xs text-gray-400'>
                                            {item.availability && 'Eligible for Shipping To Mars or somewhere else'}
                                        </span>
                                    </div>
                                    <div>
                                        <h4>₦ {currencyFormatter(item.price)}</h4>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>}
            <div className='absolute bottom-0 w-full'>
                <Link to='/checkout'>
                    <button
                        className={`${isEmptyCart ? 'bg-red-300' : 'bg-custom-one'} w-full p-1 text-white`}
                        disabled={isEmptyCart}>Proceed to checkout</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart