import './App.css';
import BeforeFooter from './Components/BeforeFooter';
import ExploreTopBooks from './Components/ExploreTopBooks';
import Navbar from './Components/Navbar';
import Transition from './Components/Transition';
import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './Components/login';
import SearchBooks from './Components/SearchBooks';
import Cart from './Components/Cart';
import Registration from './Components/Registration'; 
import { useState } from 'react';



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const index = cart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <>
              <Navbar />
              <ExploreTopBooks />
              <Transition />
              <BeforeFooter />
              <Footer />
            </>
          } />
          <Route exact path='/login' element={<Login />} />
          <Route exact path="/Registration" element={<Registration />} />
          <Route exact path='/SearchBooks' element={<SearchBooks addToCart={addToCart} />} />
          <Route exact path='/AddToCart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
