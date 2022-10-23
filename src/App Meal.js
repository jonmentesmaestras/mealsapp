import Header from './Layout/Header';
import { useState } from 'react';
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'
import CartProvider from './store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState()

  const showCartHandler = () =>{
    setCartIsShown(true)
  }

  const hideCartHandler = () =>{
    setCartIsShown(false)
  }

  return (
    <CartProvider>
    
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
    
  );
}

export default App;
