import React from "react";

export default function CharacterManager() {
  const [characters, setCharacters] = React.useState([]);

  return (
    <React.Fracment>
      <ul>
        <h3>Characters</h3>
      </ul>
    </React.Fracment>
  );
}
