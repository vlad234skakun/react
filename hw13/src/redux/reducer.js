import { nanoid } from "nanoid";

const initialStore = {
    filter: '',
    users: [
        { id: nanoid(), name: 'John Doe', age: 30 },
        { id: nanoid(), name: 'Jane Smith', age: 25 },
        { id: nanoid(), name: 'Alice Johnson', age: 28 },
        { id: nanoid(), name: 'Bob Brown', age: 35 },
        { id: nanoid(), name: 'Charlie Davis', age: 22 },
        { id: nanoid(), name: 'Diana Evans', age: 27 },
        { id: nanoid(), name: 'Ethan Foster', age: 31 },
        { id: nanoid(), name: 'Fiona Green', age: 29 },
        { id: nanoid(), name: 'George Harris', age: 33 },
        { id: nanoid(), name: 'Hannah Ivers', age: 26 },
    ]
}

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return { ...store, filter: action.payload };

        default:
            return store;
    }
}

export default reducer;