
import './App.css'
import Greeting from '../Greeting/Greeting'
import ShoppingList from '../ShoppingList/ShoppingList'
import OrderStatus from '../OrderStatus/OrderStatus'
import Section from '../Section/Section'
import PokemoneList from '../PokemoneList/PokemoneList'
import MoviesDisplay from '../MoviesDisplay/MoviesDisplay'

function App() {
  const items = ["Хлеб","Молоко","Сыр"]
  const orders = [
    { orderId: 101, status: "обработан" },
    { orderId: 102, status: "в пути" },
    { orderId: 103, status: "доставлен" },
  ]

  const pokemons = [
    { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
    { id: 2, name: "Charmander", type: "Fire" },
    { id: 3, name: "Squirtle", type: "Water" },
    { id: 4, name: "Pikachu", type: "Electric" },
    { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
    { id: 6, name: "Gengar", type: "Ghost/Poison" },
    { id: 7, name: "Snorlax", type: "Normal" },
    { id: 8, name: "Mewtwo", type: "Psychic" },
    { id: 9, name: "Dragonite", type: "Dragon/Flying" },
    { id: 10, name: "Eevee", type: "Normal" }
   ];

   const movies = [
    { id: 1, title: "Inception", year: "2010" },
    { id: 2, title: "The Matrix", year: "1999" },
    { id: 3, title: "Interstellar", year: "2014" },
    { id: 4, title: "Pulp Fiction", year: "1994" },
    { id: 5, title: "Forrest Gump", year: "1994" },
    { id: 6, title: "The Lord of the Rings: The Fellowship of the Ring", year: "2001" },
    { id: 7, title: "Star Wars: Episode V - The Empire Strikes Back", year: "1980" },
    { id: 8, title: "The Dark Knight", year: "2008" },
    { id: 9, title: "Fight Club", year: "1999" },
    { id: 10, title: "The Godfather", year: "1972" }
    ];
   
  

  return (
    <>
    <Greeting name="Alex"/>
    <Greeting name="Vlad"/>
    <Greeting name="Leo"/>

    <h2>Продукты</h2>
    <ShoppingList items = {items}/>

    <h2>Статус заказа</h2>

    <Section>
      {orders.map((order, index)=>(<OrderStatus key={index} orderId={order.orderId} status={order.status}/>))} 
    </Section>

    <MoviesDisplay movies={movies}/>

    <PokemoneList pokemons={pokemons}/>



    
    </>
  )
}

export default App
