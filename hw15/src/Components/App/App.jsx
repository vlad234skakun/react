import UserList from '../UserList/UserList'

import { useState, useCallback, useMemo } from 'react'

import './App.css'

function App() {

  const [filter, setFilter] = useState('')

  const userList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Brown' },
    { id: 5, name: 'Charlie White' }
  ];

  const searchPersonHandle = (e) => {
    // console.log(e.target.value);
    setFilter(e.target.value)
  }

  const normalize = str => str.toLowerCase().trim()

  // const filterUsers = userList.filter(user => normalize(user.name).includes(normalize(filter)))
  // console.log(filterUsers);

  // const filterUsers = (filterText) => {
  //   return userList.filter(user => normalize(user.name).includes(normalize(filterText)))
  // } 
  // const filteredUsers = filterUsers(filter)

  // const filterUsers = useCallback( () => { return()  } , []   )
  // const filterUsers = () => { return()  }

  const filterUsers = useCallback((filterText) => { return userList.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase())) }, [userList]);

  const filteredUser = useMemo(() => { return filterUsers(filter) }, [filter, filterUsers])

  return (
    <div>

      <label htmlFor="">Search Person</label>
      <input type="text" placeholder='Name' value={filter} onChange={searchPersonHandle} />

      {filter && <UserList users={filteredUser} />}




    </div>
  )
}

export default App
