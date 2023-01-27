import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PermanentDrawerLeft from "../src/pages/HomePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PermanentDrawerLeft />
      </div>
    </BrowserRouter>
  );
}

export default App;
