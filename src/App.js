import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Upload from './pages/Upload';
import './App.css';
import NavBar from './NavBar';

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
      <Router>
        <NavBar setIsAuth={setIsAuth} isAuth={isAuth} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/upload" element={<Upload setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>

    </div >
  );
}

export default App;
