import React, { useEffect, useState } from "react";
import { uid } from "uid";

const Card = ({ data }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, [count]);

  return (
    <div className="card">
      <ul>
        {data.map((item) => (
          <li key={uid(12)}>{item} </li>
        ))}
      </ul>

      <h1>Count {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  );
};

export default Card;
