import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { sportSlice } from "../components/sportSlice";

export const store = configureStore({
    reducer: {
       sports: sportSlice.reducer
    },
    })

export type RootState = ReturnType<typeof store.getState>;
export type AppDistpatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDistpatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector