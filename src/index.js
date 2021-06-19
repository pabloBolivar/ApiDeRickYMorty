import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import CharacterManager from "./components/CharacterManager";
import reducer from "./reducers/reducer";

const store = createStore(reducer, {});

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <CharacterManager />
    </Provider>
  </StrictMode>,
  rootElement
);
