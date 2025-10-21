import './App.css';
import Heading from './Component/Heading';
import Navbar from './Component/Navbar';


function App() {

  return (
    <>
    <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
    </header>
    <section>
      <Heading>Kitchen Room</Heading>
    </section>
    </>
  )
}

export default App
