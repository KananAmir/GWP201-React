import "./App.css";
// import PrimaryButton from "./componets/button";
import Card from "./componets/card";
import TableComp from "./componets/table";
import Footer from "./layouts/footer";

import Header from "./layouts/header";
function App() {
  let groupName = "GWP201";
  let data = "lorem";

  return (
    <div className="App">
      {/* <h1>Hello React</h1> */}

      <Header groupName={groupName} userName="Nazim" email="nazim@gmail.com" />
      <br />
      <br />
      <br />
      <Card data={data} />

      <hr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableComp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
