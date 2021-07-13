import React from "react";

export default function CharacterItems(props) {
  return (
    <li className="character-item">
      <img
        src={props.character.image}
        alt={`avatar de ${props.character.name}`}
      />
      <h4>{props.character.name}</h4>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Planet: {props.character.origin.name}</p>
    </li>
  );
}
