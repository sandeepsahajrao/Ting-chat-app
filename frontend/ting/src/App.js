import React from 'react'
import Navh from './components /Navh';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Signin from './pages/Signin';
import Chat from './pages/Chat';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Navh></Navh>
      <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/chat' exact element={<Chat></Chat>}></Route>
          <Route path='/signup' exact element={<SignUp></SignUp>}></Route>
          <Route path='/signin' exact element={<Signin></Signin>}></Route>
        </Routes>
    </BrowserRouter>

  )
}

export default App