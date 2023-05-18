import React from "react";
import PrimaryButton from "../../componets/button";

const Header = (props) => {
  console.log(props);

  const { groupName, email } = props;
  return (
    <div style={{ backgroundColor: "cyan" }}>
      <h2>Header</h2>
      <PrimaryButton btnText="Header Btn" bgColor="bg-green" />

      <p>Title: {groupName}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Header;
