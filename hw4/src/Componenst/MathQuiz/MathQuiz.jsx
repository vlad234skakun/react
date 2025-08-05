// Генерация случайных числе
// Отображение текущего счёта
// Интеграция с компонентом Answer для приёма и проверки ответов пользователя.

import Answer from '../Answer/Answer'

import { useState } from 'react'
import './MathQuiz.css'

const MathQuiz = ()=> { 

    const generateNumber = ()=>{
        return Math.floor(Math.random()*10) +1;
    }

    const [a, setA] = useState(generateNumber())
    const [b, setB] = useState(generateNumber())
    const [score, setScore] = useState(0)

    const updatePoints = (userAnswer) => {
        if (parseInt(userAnswer) === a+b) {
            setScore(score +1)
        }  
        else {
            setScore(score -1)
        }
        setA(generateNumber())
        setB(generateNumber())
    }

    return (
        <>
        <div className='MathQuiz-container' >
            <h1>Выши очки: {score}</h1>
            <p>{a}+{b}=</p>
            <div className="Answer-container">
                <Answer updatePoints={updatePoints} />
            </div>
        </div>
        </>
    )

}
export default MathQuiz