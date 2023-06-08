import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import axios from "axios";
import Table from "./components/table";
import { getAllData } from "./services";

//component lifecycle , mounting, unmounting, updated
const BASE_URL = "https://northwind.vercel.app/api/suppliers";
function App() {
  const data = ["Nermin", "Fatime", "Minaye"];

  const [toggle, setToggle] = useState(false);
  const [customers, setCustomers] = useState([]);

  async function getData() {
    // console.log(await getAllData());
    setCustomers(await getAllData());

    // let data = await getAllData();
    // setCustomers(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setToggle(!toggle)}>toggle</button>
        {/* {toggle ? <Card data={data} /> : null} */}

        {toggle && <Card data={data} />}
        <hr />
        <h1>Customer Table</h1>
        <Table customers={customers} setCustomers={setCustomers} />
      </div>
    </>
  );
}

export default App;
