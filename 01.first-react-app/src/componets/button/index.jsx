import React from "react";
import "./index.scss";

const PrimaryButton = (props) => {
  // console.log(props);
  // const { btnText, bgColor } = props;
  const handleClick = () => {
    console.log("react");
  };

  return (
    // <button id="primary-btn" onClick={() => handleClick()}>
    <button id="primary-btn" onClick={handleClick} className={props.bgColor}>
      {props.btnText}
    </button>
  );
};

export default PrimaryButton;
