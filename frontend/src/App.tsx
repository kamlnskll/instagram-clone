import React from "react";
import Register from "./pages/Register";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomeFeed from "./pages/HomeFeed";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App(): any {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeFeed />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/profile/:username' element={<Profile />}/>
    </Routes>
    <div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
