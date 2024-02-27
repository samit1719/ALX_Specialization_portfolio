import './App.css';
// import Login  from './pages/login/Login';
// import SignUp from './pages/signup/SignUp';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() { 
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Sidebar /> */}
      <Home />
    </div>
    </>
  )
}

export default App;