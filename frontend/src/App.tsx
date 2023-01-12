import Register from "./pages/Register";
import {Routes, Route, BrowserRouter, Navigate, useLocation} from 'react-router-dom'
import HomeFeed from "./pages/HomeFeed";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useUserContext } from "./hooks/useUserContext.js";
import EditProfile from "./pages/EditProfile";
import SinglePost from "./pages/SinglePost";
import Messages from "./pages/Messages";

function App(): any {

const { user } = useUserContext()

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={user ? <HomeFeed /> : <Navigate to="/login" />}/>
      <Route path='/register' element={!user ? <Register /> : <Navigate to="/" />}/>
      <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />}/>
      <Route path='/profile/:username' element={<Profile />}/>
      <Route path='/accounts/edit' element={user ? <EditProfile /> : <Navigate to="/" />} />
      <Route path='*' element={<Navigate to="/" />}/>
      <Route path='/messages' element={user ? <Messages /> : <Navigate to="/" />} />
      <Route path='/post/:postid' element={<SinglePost />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
