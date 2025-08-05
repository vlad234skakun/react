import { configureStore } from '@reduxjs/toolkit';

import questionnaireReducer  from './questionnaire/questionnaire-Slice';

const store = configureStore({
    reducer: { 
        questionnaire: questionnaireReducer,
    }
})

export default store;