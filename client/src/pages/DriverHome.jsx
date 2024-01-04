import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function DriverHome() {
  const navigate = useNavigate()
  
  useEffect(() => {
    const isUserSignedIn = !!localStorage.getItem('token')
    if(!isUserSignedIn) {
      navigate('/driverLogin')
    } 
  
  }, [navigate])
  
  return (
    <div>
    <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default DriverHome