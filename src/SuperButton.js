import React from "react";
import "./styles.css";

export default ({ text, alertText }) => {
  function handleClicked() {
    alert(alertText);
  }

  return <button onClick={handleClicked}>{text}</button>;
};
