import React from "react";

function Toast({ message, visible }) {
  return <div className={`toast ${visible ? "visible" : ""}`}>{message}</div>;
}

export default Toast;
