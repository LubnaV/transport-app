import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import DriverLogin from './pages/DriverLogin'
import Home from './pages/Home'
import DriverHome from './pages/DriverHome'
import BookRides from './pages/BookRides'
import Account from './pages/Account' 
import QrCode from './pages/QrCode'
import PastRides from './pages/PastRides'
import Profile from './pages/Profile'
import Background from './components/Background'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
  <>
  <Background/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/driverLogin' element={<DriverLogin/>}/>
      <Route path='/driverHome' element={<DriverHome/>}/>
      <Route path='/home' element={<Home/>}>
          {/* Child Routes */}
          <Route path='/home' element={<Navigate to='/home/account' replace/>} /> 
          <Route path='/home/account' element={<Account />} />
          <Route path='/home/bookRides' element={<BookRides />} />
          <Route path='/home/qrCode' element={<QrCode />} />
          <Route path='/home/pastRides' element={<PastRides />} />
          <Route path='/home/profile' element={<Profile />} />
        </Route>
    </Routes>
  </>
    
  )
}

export default App