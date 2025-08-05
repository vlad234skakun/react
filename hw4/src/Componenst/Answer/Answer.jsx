// Предоставляет форму для ввода ответа пользователя
// Обрабатывает его ввод и отправляет введённую информацию на проверку
// Он связан с компонентом MathQuiz через функцию updatePoints, которая вызывается при подаче формы.


import { useState } from 'react'
import './Answer.css'

const Answer = ({updatePoints})=>{

    const [answer, setAnswer] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (answer === '') {
            alert('Пожалуйста, введите ответ!'); // Показываем ошибку
            return;
        }
        updatePoints(answer)
        setAnswer('')
    }

    // setAnswer(e.target.value)

    return (
        <>
        <form onSubmit={handleSubmit}  >
            <input value={answer} type="text" placeholder='Введите ответ' onChange={(e)=> setAnswer(e.target.value)} />
            <button type='submit'>Проверить</button>
        </form>
        </>
    )
}

export default Answer