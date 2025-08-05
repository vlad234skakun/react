import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'

import MainMenu from '../MainMenu/MainMenu'

import HomePage from '../../pages/HomePage/HomePage'
import PostsList from '../../pages/PostsList/PostsList'
import SinglePost from '../../pages/SinglePost/SinglePost'


import './App.css'

function App() {
  
  return (
    <>
      <MainMenu/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts' element={<PostsList/>} />
        <Route path='/posts/:id' element={<SinglePost/>} />
      </Routes>

    </>
  )
}

export default App
