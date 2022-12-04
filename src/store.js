import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import quoteReducer from "../src/reducer/quoteReducer";

const middleware = [thunk];

const store = createStore(
  quoteReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
);

export default store;
