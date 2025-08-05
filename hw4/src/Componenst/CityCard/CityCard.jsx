import './CityCard.css'

const CityCard = ({city})=>{
    if (!city) return <h1>Выберите Город</h1>

    const element = city.facts.map((fact,index)=><li key={index}>{fact}</li>)

    return(
        <div className="Card-block">
            <div className="Card-container" >
                <h1>{city.name}</h1>
                <img src={city.imageUrl} alt=""/>
                <p>{city.description}</p>
                <ul>{element}</ul>
            </div>
        </div>
    )

}
export default CityCard