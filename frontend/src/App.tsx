import React from "react";
import Register from "./pages/Register";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import HomeFeed from "./pages/HomeFeed";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useUserContext } from "./hooks/useUserContext.js";

function App(): any {

const { user } = useUserContext()

  return (
    <>
    <BrowserRouter>
    <div className="flex">
    <Navbar />
    <Routes>
      <Route path='/' element={user ? <HomeFeed /> : <Navigate to="/login" />}/>
      <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}/>
      <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
      <Route path='/profile/:username' element={<Profile />}/>
      <Route path='*' element={<Navigate to="/" />}/>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
