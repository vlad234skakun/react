const Question = ({ key, id, text }) => { 
    return ( 
        <div  key={key} id={id}>
            <h4>{text}</h4>
            <div>
                <input type="radio" name="question" value="yes" /> Да
                <input type="radio" name="question" value="no" /> Нет
            </div>
        </div>
    )
};

export default Question