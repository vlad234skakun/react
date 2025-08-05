import { useEffect, useState } from "react"

const ListItems = ()=>{

    const [items, setItems] = useState([])
    const [inputValue, setValue] = useState({todo : ''})

    const handleChange = (element)=>{
        const { name , value } = element.target
        setValue(prevValue => ({...prevValue, [name] : value}))
        
    }
    const addItem = (e) =>{
        e.preventDefault()
        setItems(prevItems => [...prevItems, inputValue])
        setValue({todo : ''})
    }

    const element = items.map((item, index) => <li key={index} >{item.todo}</li> )

    useEffect(()=>{
        (console.log("компонент обновлен"))
    } , [])

    return (
        <div>
            <form onSubmit={addItem} >
                <input value={inputValue.todo}   onChange={handleChange} type="text" name="todo" required />
                <button type="submit">Click</button>
            </form>
            <ul>
                {element}
            </ul>


        </div>
    )



}
export default ListItems