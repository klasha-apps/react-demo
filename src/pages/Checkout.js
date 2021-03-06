import { useKlashaPayment } from 'react-klasha'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/General/Layout'
import { useCart } from '../contexts/cart'

const Checkout = () => {

    const [cart] = useCart()
    const navigate = useNavigate()

    const callBack = response => {
        console.log(response)
        navigate('/')
    }

    const initializePayment = useKlashaPayment({
        isTestMode: 'dev',
        email: 'yowivig426@goonby.com',
        phone_number: '+2348143108254',
        merchantKey: 'W2mbGtdx5vKCepFaUm2CqdzebaVW9z22shubB4xFbKTR3g4sL72+7qNQYHTUEfs0my1e/hAO1Nkdx9YbXTjUOg==',
        amount: 1000,
        sourceCurrency: '',
        destinationCurrency: '',
        tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        businessId: '1',
        fullname: 'Dansteve Adekanbi',
        paymentDescription: '',
        kit: {
            currency: '',
            phone_number: '+2348143108254',
            email: 'yowivig426@goonby.com',
            fullname: 'Dansteve Adekanbi',
            tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1),
            paymentType: '',
            callBack
        }
    })

    return (
        <Layout>
            {
                cart.length < 1 ?
                    <div className='text-center text-xl text-gray-500'>Add atleast an item from the available products on the
                        <Link to='/' className='text-blue-500'> Products page</Link>
                    </div> :
                    <div className='sm:w-2/5 mx-auto px-3 sm:px-0 pb-8'>
                        <h2 className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-center'>Checkout</h2>
                        <div className='mt-20'>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <h5>1. Address details</h5>
                                    <span className='text-custom-one cursor-pointer'>Change</span>
                                </div>
                                <h6 className='mt-10 text-sm'>Ada Adiche</h6>
                                <p className='text-gray-400 text-xs'>Plot 6 & 7 Elemo Layout, Off Oda Road, Akure-Oda Road, Ondo +2349071603960</p>
                            </div>

                            <div className='my-20'>
                                <h5>2. Delivery method</h5>
                                <p className='text-gray-400 text-xs'>How do you want your order delivered?</p>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-10 items-center mt-10'>
                                    <div className='space-x-2'>
                                        <input type={'radio'} id='door-delivery' name='delivery-method' defaultChecked />
                                        <label htmlFor='door-delivery'>Door delivery</label>
                                    </div>
                                    <div className='space-x-2'>
                                        <input type={'radio'} id='pickup-station' name='delivery-method' />
                                        <label htmlFor='pickup-station'>Pickup station</label>
                                    </div>
                                </div>
                            </div>

                            <div className='my-20'>
                                <h5>3. Payment method</h5>
                                <p className='text-gray-400 text-xs'>How do you want to pay?</p>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 items-center mt-10'>
                                    <div className='space-x-2'>
                                        <input type={'radio'} id='pay-with-klasha' name='payment-method' defaultChecked />
                                        <label htmlFor='pay-with-klasha'>Pay with klasha</label>
                                    </div>
                                    <img src='/assets/images/pay-with-klasha.png' alt='pay with klasha' className='w-full' />
                                </div>
                            </div>
                        </div>

                        <button
                            className='bg-custom-one w-full sm:w-3/4 text-white py-1'
                            onClick={() => initializePayment(callBack)}>Confirm order</button>

                    </div>
            }
        </Layout>
    )
}

export default Checkout