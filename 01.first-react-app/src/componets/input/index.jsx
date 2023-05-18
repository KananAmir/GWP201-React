import React from "react";

const InputComp = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input type="text" id="user-input" onChange={(e) => handleChange(e)} />
      {props.data}
    </div>
  );
};

export default InputComp;
