import './PokemoneList.css'
import Pokemon from './Pokemon/Pokemon'

const PokemoneList = ({pokemons}) => {
    return (
        <ul>
            {pokemons.map((pokemon)=>(<Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} />  ))}
        </ul>
    )
}

export default PokemoneList