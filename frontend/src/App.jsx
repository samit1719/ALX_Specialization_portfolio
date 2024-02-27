import './App.css';
import Login  from './components/auth/LoginPage';
import SignUp from './components/auth/SignupPage';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
function App() { 
  return (
    <>
      <div>
        {/* <Login /> */}
        {/* <SignUp /> */}
        {/* <Sidebar /> */}
        {/* <Home /> */}

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  )
}

export default App;