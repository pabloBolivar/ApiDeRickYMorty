import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import CharacterManager from "./components/CharacterManager";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <CharacterManager />
  </StrictMode>,
  rootElement
);
