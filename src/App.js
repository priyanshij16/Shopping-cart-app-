import React, { useState } from 'react'
import Amazon from './Components/Amazon'
import Cart from './Components/Cart';
 import Navbar from './Components/Navbar'
const App = () => {
  const [show, setShow]= useState(true);
  // this we  are using uplifting method
  const [cart, setCart] = useState([]);
  
  const handleClick = (item) => {
    if(cart.indexOf(item) !=-1) return;
   setCart( [...cart,item]);
  }

  const handleChange =(item,d)=>{
    const ind = cart.indexOf(item);
    const arr= cart;
    arr[ind].amount += d;

    if( arr[ind].amount ==0 ) arr[ind].amount=1;
    setCart([...arr]);
  };
  useEffect( () => {
    console.log("cart change");  
  }, [cart] );
  
  return (
    <React.Fragment>
       <Navbar setShow={setShow}/>
   {
    show?<Amazon handleClick={handleClick }/>: 
  (  <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> ) }
     </React.Fragment>
  )
}

export default App