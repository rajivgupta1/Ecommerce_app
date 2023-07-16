import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignIn from './pages/signin-signup/SignIn'
import SignUp from './pages/signin-signup/SignUp'




function App() {
  return (
    <div className=''>
    <Routes >
    <Route path='/' element={<SignIn/>} />
    <Route path='/register' element={<SignUp/>} />
    </Routes>
      
    </div> 
      
  );
}

export default App;
