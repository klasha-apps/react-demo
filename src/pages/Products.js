import Layout from '../components/General/Layout'
import Product from '../components/Product'
import { products } from '../utils/products'

const Products = () => {
  return (
    <Layout>
      <h2 className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-center'>Nike Collections</h2>
      <div className='flex flex-wrap items-center justify-center mt-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
          {products.map(item => <Product key={item.id} item={item} />)}
        </div>
      </div>
    </Layout>
  )
}

export default Products