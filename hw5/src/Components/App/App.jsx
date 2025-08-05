import { useState } from 'react'

import '../../styles/style.css'


import TextComponents from '../TextComponents/TextComponents'
import IconsComponents from '../IconsComponents/IconsComponents'
import Header from '../Header/Header'



function App() {

  return (
    <>
      <Header/>
      <div className="container">
        <TextComponents/>
        <IconsComponents/>
      </div>
    </>
  )
}

export default App
