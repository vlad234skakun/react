import { useState } from 'react'

import './App.css'
import CitySelector from '../CitySelector/CitySelector.jsx'
import CityCard from '../CityCard/CityCard.jsx'
import citiesData from '../CityCelector/CityCelector.js'
import MathQuiz from '../MathQuiz/MathQuiz.jsx'



function App() {
  const [selectCityindex, handleCityChange] = useState(null)
  // selectCityindex = 1

  const selectedCity = selectCityindex == null ? null : citiesData[selectCityindex]


  return (
    <>
      <div className="block">
        <CitySelector cities={citiesData} onCityChange={handleCityChange}/>
        <CityCard city={selectedCity}/>
      </div>
      <div className='MathQuiz-block'>
        <MathQuiz/>
      </div>



    </>
    
  )
  
}

export default App
