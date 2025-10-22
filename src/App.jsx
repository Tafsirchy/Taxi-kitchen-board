import { Suspense } from 'react';
import './App.css';
import Heading from './Component/Heading';
import Navbar from './Component/Navbar';
import OrderContainer from './Component/OrderContainer';
import States from './Component/States';

const loadOrders = () => fetch("/public/orders.json")
  .then(res => res.json())

function App() {
  
  const ordersPromise = loadOrders();
  // console.log(ordersPromise); // Promise {<pending>}

  return (
    <>
    <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
    </header>
    <section>
      <Heading>Kitchen Room</Heading>
    </section>
    <Suspense fallback={"Loading..."}>
      <OrderContainer  ordersPromise={ordersPromise}></OrderContainer>
    </Suspense>
    <section>
      
    </section>
    </>
  )
}

export default App
