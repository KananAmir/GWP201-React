import React from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  let params = useParams();

  console.log(params);
  return <div>UserDetailsPage</div>;
};

export default UserDetailsPage;
