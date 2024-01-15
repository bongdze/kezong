import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import loaderReducer from './reducers/loaderSlice';
import AuthReducer from './reducers/AuthSlice';

export const reduxStore = configureStore({
    reducer: {
        auth: AuthReducer,
        loader: loaderReducer,  
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
       thunk
    ]
    
});