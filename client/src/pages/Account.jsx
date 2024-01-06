import { useEffect, useState } from 'react'
import axios from 'axios';

function Account() {
  const [profile, setProfile] = useState(null) //profile is initially null, set after fetching from server

  //after rendering for the first time, the function in useEffect will take place
  useEffect(() => {
    const token = localStorage.getItem('token')
    
    const fetchFromServer = async () => { 
      const result = await axios.get('http://localhost:3001/getProfile', { //sending request from frontend to backend
      headers: { authorization: token } //setting headers with token
      });

      const data = result.data //json from server
      setProfile(data)
    }
    
    fetchFromServer()
  }, [])

  if(profile===null) {
    return (<div>Loading...</div>) //initially shown during fetching 
  }

  const name = profile.names
  return (
    <div>
      <h1>Hello {name}!</h1>
    </div>
  )
}

export default Account