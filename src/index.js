import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap-css";
import "./styles.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import CharacterItemsContainer from "./components/CharacterItemsContainer";
import reducer from "./reducers/reducer";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CharacterItemsContainer />
    </Provider>
  </StrictMode>,
  rootElement
);
