import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import logger from 'redux-logger';
import rootReducer from './modules/rootReducer';

const makeStore = (context) => {
    const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    })
    return store;
};


export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== 'production',
});
