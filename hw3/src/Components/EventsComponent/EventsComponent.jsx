

const EventsComponent = ()=>{

    const onClickFunction =()=>{
        console.log("Кнопка нажата");
    }



    return (
        <>
        <h1 onClick={()=>onClickFunction()}>Текст1</h1>
        <h1>Текст2</h1>
        <h1>Текст3</h1>
        <h1>Текст4</h1>
        <h1>Текст5</h1>
        </>

    )
}

export default EventsComponent