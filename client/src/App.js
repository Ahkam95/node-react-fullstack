import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  console.log('came2')
  const [users, setUsers] = useState('')
  useEffect(() => {
    let data;
    const fetchData = async () => {
      data = await axios.get('/users');
      setUsers(data.data)
    }
    fetchData()
  }, [])
  
  console.log('users', JSON.parse('{"users":1}'))



  return (
    <div>Hi</div>
  )
}

export default App