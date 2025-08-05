const ShoppingList = ({items = []}) =>{
    if (!items?.length) {
        return <p>Список не найден</p>
    }
    const element = items.map((item, index) => <li key={index}>{item}</li>)
    // console.log(element);
    
    return <div><ul>{element}</ul></div> // Вот это более универсальный вариант
    
    // return (  
    //     // <div>
    //     //     {items.length > 0 ? (<ul>{element}</ul>) : ( <p>Список не найден</p> ) } Более слабый вариант
    //     // </div>
    // );
};

export default ShoppingList 



