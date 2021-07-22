import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap-css";
import "./styles.css";

import { Provider } from "react-redux";
import { store } from "./Redux/store";

import CharacterItemsContainer from "./components/CharacterItemsContainer";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CharacterItemsContainer />
    </Provider>
  </StrictMode>,
  rootElement
);
