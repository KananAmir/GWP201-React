import React from "react";
import { users } from "../../data/index";

const TableComp = () => {
  console.log(users);

  let tHeadRowStyle = {
    color: "blue",
    backgroundColor: "pink",
  };
  return (
    <table>
      <thead>
        <tr style={tHeadRowStyle}>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>STREET</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => {
          return (
            <tr
              style={{ color: item.id === 7 ? "red" : "green" }}
              key={item.id}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address.street}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComp;
