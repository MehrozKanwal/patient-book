import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Appointment from './pages/appointment/Appointment';
import CallAmbulance from './pages/callAmbulance/CallAmbulance';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/callAmbulance' element={<CallAmbulance />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
