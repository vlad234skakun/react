import Filter from '../Filter/Filter'
import UserList from '../UserList/UserList'

import './App.css'

function App() {

  return (
    <div className="container">
      <h1>User List</h1>
      <Filter />
      <UserList />
    </div>
  )
}

export default App
