import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  console.log('came2')
  const [users, setUsers] = useState('')
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get('/users');
        setUsers(response.data)
      }
      fetchData()
    } catch (e) {
      console.log(e)
    }
  }, [])
  
  console.log('users', users)



  return (
    <div>Hi</div>
  )
}

export default App