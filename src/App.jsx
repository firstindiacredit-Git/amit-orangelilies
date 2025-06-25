import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/HomePage'
import Comingsoon from './component/Comingsoon'
import Contact from './component/ContactPage'
import About from './component/About'
import Shipping from './component/Shipping'
import Privacy from './component/Privacy'
import Terms from './component/Terms'
import Sustainability from './component/Sustainability'


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Comingsoon />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/shipping' element={<Shipping />}></Route>
          <Route path='/privacy&policy' element={<Privacy />}></Route>
          <Route path='/termsofservice' element={<Terms />}></Route>
          <Route path='/sustainability' element={<Sustainability />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
