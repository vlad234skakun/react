import './MoviesCard.css'
const MoviesCard = ({ title, year })=>{
    return (
    <>
    <div className="card-item">
        <h1>{title}</h1>
        <p>Год выпуска: {year}</p>
    </div>
    </>
    )
}

export default MoviesCard