import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import indexReducer from "./indexReducer";

export const store = createStore(indexReducer, {}, applyMiddleware(reduxThunk));
