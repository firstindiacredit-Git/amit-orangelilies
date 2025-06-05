import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/HomePage'
import Comingsoon from './component/Comingsoon'
import Contact from './component/ContactPage'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Comingsoon />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
