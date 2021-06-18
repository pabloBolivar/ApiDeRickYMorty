import { StrictMode } from "react";
import ReactDOM from "react-dom";

import CharacterManager from "./components/CharacterManager";

const rootElement = document.getElementById("app");
ReactDOM.render(
  <StrictMode>
    <CharacterManager />
  </StrictMode>,
  rootElement
);
