import React, { useEffect } from "react";
import Register from "./pages/Register";
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useUserContext } from "./hooks/useUserContext.js";
import EditProfile from "./pages/EditProfile";
import SinglePost from "./pages/SinglePost";
import Messages from "./pages/Messages";
import jwtDecode from "jwt-decode";

function App(): any {

const { user } = useUserContext()
// const decodedToken = jwtDecode(user)  


const checkUserToken = () => {

}




  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={user ? <HomeFeed /> : <Navigate to="/login" />}/>
      <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}/>
      <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
      <Route path='/profile/:username' element={<Profile />}/>
      <Route path='/accounts/edit' element={<EditProfile />} />
      <Route path='*' element={<Navigate to="/" />}/>
      <Route path='/messages' element={<Messages />} />
      <Route path='/post/:postid' element={<SinglePost />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
