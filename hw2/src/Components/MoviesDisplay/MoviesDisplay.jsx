import './MoviesDisplay.css'
import MoviesCard from './MoviesCard/MoviesCard'

const MoviesDisplay = ({movies})=>{
    return (
        <div className="Card-container" >
            {movies.map((movie) => (<MoviesCard key={movie.id} title={movie.title} year={movie.year}/>))}
        </div>
    )
}

export default MoviesDisplay