import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  console.log('came2')
  const [users, setUsers] = useState(undefined)
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
    <>
      {(users === undefined) ? <p>Loading..</p> : (
        users.Users.map((user, i) => (<p>{user}</p>))
      )}
      <div>Hi</div>
    </>
  )
}

export default App
