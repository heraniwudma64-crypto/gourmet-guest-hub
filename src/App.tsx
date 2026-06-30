import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { CartProvider } from './context/CartContext';
import { CartDrawer } from './components/CartDrawer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Menu = React.lazy(() => import('./pages/Menu'));
const About = React.lazy(() => import('./pages/About'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Reservations = React.lazy(() => import('./pages/Reservations'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const Admin = React.lazy(() => import('./pages/Admin'));

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <React.Suspense fallback={<div className="h-screen flex items-center justify-center bg-background text-primary text-2xl font-serif">Loading Bella Vista...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
              <Route path="about" element={<About />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="contact" element={<Contact />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="admin/*" element={<Admin />} />
          </Routes>
          <CartDrawer />
        </React.Suspense>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
