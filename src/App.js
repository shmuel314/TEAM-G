import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/layout/Main";
import Playground from "./playground/Playground";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Playground />
      </BrowserRouter>
    </div>
  );
}

export default App;
