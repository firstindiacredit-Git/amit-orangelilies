import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/HomePage'
import Comingsoon from './component/Comingsoon'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Comingsoon />}></Route>
          <Route path='/fwehfljhl;dsnklh' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
