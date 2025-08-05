import { useState } from 'react'
import './List.css'
import styles from './List.module.css'

const List = () => {

    const Listpeoples = [
        { id: 1, name: 'Иван', age: 20 },

        { id: 2, name: 'Мария', age: 22 },

        { id: 3, name: 'Алексей', age: 21 },

        { id: 4, name: 'Марина', age: 19 },

        { id: 5, name: 'Даша', age: 23 },

        { id: 6, name: 'Глеб', age: 24 },

        { id: 7, name: 'Дима', age: 18 },

        { id: 8, name: 'Гриша', age: 20 },

        { id: 9, name: 'Серафим', age: 21 }
    ]

    const [people, setPeople] = useState(Listpeoples);
    const [thema, setThema] = useState("white")

    const toggleTheme = () => {
        setThema(thema === "white" ? "black" : "white")
        
    }


    const handleDelete = (id)=>{
        setPeople(people.filter(person=>person.id !== id)) 
    }

    const reversButton = ()=>{
        setPeople(Listpeoples)
    }

    return (
        <>
        <div className="togglethema-container">
            <button onClick={()=>toggleTheme()} className={thema === 'white' ? styles['btn-white'] : styles['btn-black']}>Смена Темы</button>
        </div>
        <div className={thema === 'white' ? 'list-container' : styles['list-container-black'] }>
            <h2 className={thema === 'white' ? 'title' : 'title-black' }>Список</h2>
            
            <ul>
                {people.map((person)=>(<li className='person-item' key={person.id}><span>{person.name}: {person.age} лет</span>
                    <button onClick={() => handleDelete(person.id)}>Удалить</button>
                </li>))}
            </ul>
        <div className="revers-container"><button onClick={()=>reversButton()} className='btn-revers'>Вернуть</button></div>
        </div> 
        
        </>
    )
}
export default List 