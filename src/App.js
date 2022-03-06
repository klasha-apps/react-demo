import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartProvider from './contexts/cart'

const Products = lazy(() => import('./pages/Products'))
const Checkout = lazy(() => import('./pages/Checkout'))

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading app...</div>}>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='checkout' element={<Checkout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
