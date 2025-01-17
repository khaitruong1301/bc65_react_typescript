import {configureStore} from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
    reducer:{
        number: (state:number =1) => state,
        productReducer,
        userReducer
        //...
    }
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export type GetStateMethodType = typeof store.getState