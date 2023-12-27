import React from "react";

const Button = ({ onClick, buttonText }) => {
  return (
    <button className="hide-show-button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
