import { configureStore } from "@reduxjs/toolkit";
import { Store } from 'redux'


import { sportSlice } from "../components/sportSlice";


export const store  = configureStore({
    reducer: {
        sports: sportSlice.reducer,
      }
    })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
