import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import quizSlice from "./quizSlice";
import authSlice from "./authSlice";
import myOpenDictSlice from "./myOpenDictSlice";

const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        quizSlice,
        authSlice,
        myOpenDictSlice,
        // 여기에 추가 
    })(state, action);
}

export default rootReducer;