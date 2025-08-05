import { SET_USER_INFO } from "./types";

const initialStore = { 
    name: "",
    status: ""
};

const reducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...store ,
                ...action.payload
            }
    
        default:
            return store;
    }
}

export default reducer