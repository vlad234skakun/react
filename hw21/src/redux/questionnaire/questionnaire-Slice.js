import { createSlice } from "@reduxjs/toolkit"

const questionnaireSlice = createSlice({
    name: "questionnaire",
    initialState: { 
        questions: [
            {
                id: 1,
                question: "Нравиться ли тебе париж ?",
                answers: [
                    { id: 1, text: "Да" },
                    { id: 2, text: "Нет" }
                ]
            },
            {
                id: 2,
                question: "Какой твой любимый цвет ?",
                answers: [
                    { id: 1, text: "Красный" },
                    { id: 2, text: "Синий" },
                ]
            }
        ]
    },
    reducers: { 

    }

})

export default questionnaireSlice.reducer