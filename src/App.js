import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Game from './components/Game'
import Home from './pages/Home'
const App = () => {
  return (
    <>
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/game/:name' element={<Game/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App