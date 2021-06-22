import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import CharacterManagerContainer from "./components/CharacterManagerContainer";
import reducer from "./reducers/reducer";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CharacterManagerContainer />
    </Provider>
  </StrictMode>,
  rootElement
);
