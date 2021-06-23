import React from "react";

export default function CharacterManager(props) {
  return (
    <div>
      <h3>Characters</h3>
      <ul className="character-container">{props.displayer()}</ul>
    </div>
  );
}
