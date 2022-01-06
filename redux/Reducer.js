import { combineReducers } from "redux";
import { CURRNT_CITY } from "./Action"


const initialState = {
    currnt_city: "",
};

const changeState = (state = initialState, action) => {
    switch (action.type) {
        case CURRNT_CITY:
            return { ...state, currnt_city: action.payload }
        default:
            return state
    }
}


const rootReducer = combineReducers({ changeState });
export default rootReducer;