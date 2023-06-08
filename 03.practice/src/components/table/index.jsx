import axios from "axios";
import React from "react";
import { deleteById } from "../../services";

const Table = ({ customers, setCustomers }) => {
  const handleRemoveRow = (id) => {
    let updatedCustomers = customers.filter((item) => item.id != id);
    console.log(id);
    setCustomers(updatedCustomers);

    deleteById(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((el, i, arr) => {
          return (
            <tr key={el.id} onClick={() => handleRemoveRow(el.id)}>
              <td>{el.id}</td>
              <td>{el.companyName}</td>
              <td>{el.contactName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
