import { useState } from 'react'

import './App.css'
import User from '../User/User'
import UserForm from '../UserForm/UserForm'

function App() {

  return (
    <div className='container'>
    <h1>User Profile</h1>
    <h3>User Information</h3>
    <User/>
    <h3>Edit User Information</h3>
    <UserForm/>
    </div>
  )
}

export default App
