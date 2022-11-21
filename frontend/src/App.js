import Register from "./pages/Register.tsx";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import HomeFeed from "./pages/HomeFeed.tsx";
import Navbar from "./components/Navbar.tsx";
import Login from "./pages/Login.tsx";
import Profile from "./pages/Profile.tsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar />}/>
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
