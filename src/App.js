import './App.css';
import NavbarLoggedIn from './components/NavbarLoggedIn';
import Navbar from './components/Navbar';
import Sell from './pages/Sell';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Bid from './pages/Bid';
import Contest from './pages/Contest';

function App() {

  return(
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route excat path='/' element={<Home/>}></Route>
          <Route excat path='/sell' element={<Sell/>}></Route>
          <Route excat path='/bid' element={<Bid/>}></Route>
          <Route excat path='/Contest' element={<Contest/>}></Route>
          <Route excat path='/login' element={<Login/>}></Route>
          <Route excat path='/register' element={<SignUp/>}></Route>
          <Route excat path='/profile' element={<Profile/>}></Route>
          <Route excat path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
