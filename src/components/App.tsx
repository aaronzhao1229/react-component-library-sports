import { Provider } from "react-redux";
import { store, useAppDispatch } from "src/store/configureStore";
import { Card } from "./card";
import { ContentRepository } from "src/api/ContentRepository";
import { useCallback, useEffect, useState } from "react";
import { fetchSportsAsync } from "./cardSlice";
import LoadingComponent from "./LoadingComponent";
import CardWrap from "./cardWrap";
const contentRepo = new ContentRepository()

export function App() {
  
  return (
    <Provider store={store}>
      <CardWrap />
    </Provider>
  )
}