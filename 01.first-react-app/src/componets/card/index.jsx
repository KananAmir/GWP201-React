import React from "react";
import InputComp from "../input";

const Card = ({ data }) => {
  let userName = "lorem ipsum";
  return (
    // <React.Fragment>
    <>
      <div style={{ border: "1px solid black", backgroundColor: "orange" }}>
        <h2>{userName}</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>

      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quas
        magnam, excepturi consequuntur ipsam obcaecati assumenda cum culpa aut
        ipsa deserunt itaque? Eveniet fugit rerum vitae odit commodi eligendi
        praesentium!
      </div>

      <hr />
      <InputComp data={data} />
      <hr />
    </>

    // </React.Fragment>
  );
};

export default Card;
