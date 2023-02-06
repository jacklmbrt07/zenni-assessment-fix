import Table from "./components/Table";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <BrowserRouter>
        <Table />
      </BrowserRouter>
    </div>
  );
}
