import { Provider } from "react-redux";
import { store } from "src/store/configureStore";
import { ContentRepository } from "src/api/ContentRepository";
import CardWrap from "./cardWrap";
const contentRepo = new ContentRepository()

export function SportsUI() {
  
  return (
    <Provider store={store}>
      <CardWrap />
    </Provider>
  )
}