import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return(
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route excat path='/' element={<Home/>}></Route>
          <Route excat path='/login' element={<Login/>}></Route>
          <Route excat path='/register' element={<SignUp/>}></Route>
          <Route excat path='/profile' element={<Profile/>}></Route>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App;
