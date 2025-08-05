import './CitySelector.css'

const CitySelector = ({cities, onCityChange})=>{
    return(
        <div className='label-container'>
            <label className="select-label" htmlFor="city-select">Выберите Город:</label>
            <select onChange={(e)=>onCityChange(e.target.value)} name="" id="">
                <option value="">Выберите город</option>
                {cities.map((city,index)=> ( <option key={index} value={index}>{city.name}</option>))}
            </select>
        </div>
    )
}
export default CitySelector