import { useCart } from '../../contexts/cart'
import { currencyFormatter } from '../../utils/helperFunctions'
import CartIcon from '../General/CartIcon'
import FullStar from '../General/FullStar'
import HalfStar from '../General/HalfStar'

const Product = ({ item }) => {

  const [cart, addToCart, removeFromCart] = useCart()

  const checkProductInCart = () => cart.find(product => product.id === item.id)
  const isProductInCart = checkProductInCart()

  return (
    <div className='focus:outline-none mx-2 w-72 mb-8 relative'>

      <img
        alt={item.name}
        src={item.image}
        className='focus:outline-none w-full h-44 rounded'
      />

      <div className='bg-white text-left sm:h-44'>
        <p className='focus:outline-none text-xs text-gray-400 mt-2 pr-20'>
          {item.name}
        </p>
        <div className='flex items-center my-2'>
          <h2 className='focus:outline-none text-lg font-semibold'>₦ {currencyFormatter(item.price)}</h2>
        </div>
        <p className='focus:outline-none text-xs text-gray-400 pr-20'>
          {item.availability && 'Eligible for Shipping To Mars or somewhere else'}
        </p>

        <div className='flex items-center justify-between mt-5 sm:absolute sm:bottom-0 right-0 left-0'>
          <div className='flex items-center gap-0'>
            {[1, 2, 3, 4].map(item => <FullStar key={item} />)}
            <HalfStar />
          </div>
          <div className='pl-2'>
            <button
              className={`flex items-center gap-1 ${isProductInCart ? 'bg-red-300' : 'bg-custom-one'} text-white p-2 text-sm`}
              onClick={() => isProductInCart ? removeFromCart(item) : addToCart(item)}>
              <CartIcon color={'#FFFFFF'} />
              <span>{isProductInCart ? ' Remove ' : 'Add to Cart'}</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Product