import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import DriverLogin from './pages/DriverLogin'
import Home from './pages/Home'
import DriverHome from './pages/DriverHome'
import BookRides from './pages/BookRides'
import StudentList from './pages/StudentList'
import Account from './pages/Account' 
import DriverAccount from './pages/DriverAccount'
import QrCode from './pages/QrCode'
import DriverQrCode from './pages/DriverQrCode'
import PastRides from './pages/PastRides'
import Map from './pages/Map'
import Profile from './pages/Profile'
import DriverProfile from './pages/DriverProfile'
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
      <Route path='/driverHome' element={<DriverHome/>}>
          {/* Child Routes */}
          <Route path='/driverHome' element={<Navigate to='/driverHome/driverAccount' replace/>} /> 
          <Route path='/driverHome/driverAccount' element={<DriverAccount />} />
          <Route path='/driverHome/studentList' element={<StudentList />} />
          <Route path='/driverHome/driverQrCode' element={<DriverQrCode />} />
          <Route path='/driverHome/map' element={<Map />} />
          <Route path='/driverHome/driverProfile' element={<DriverProfile />} />
        </Route>
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