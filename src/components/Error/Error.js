import React from "react";

import "./styleError.css";

export default function ErrorPage(props) {
  return (
    <div className="error-container">
      <span className="illustration">
        <div className="circle">
          <div></div>
        </div>
        <div className="colored-bar"></div>
        <div className="leg l1"></div>
        <div className="leg l2"></div>
      </span>
      <span className="error-title">
        <h2>Opss!</h2>
        <h3>A error has ocurred</h3>
      </span>
      <p>Error: {props.message}</p>
    </div>
  );
}
