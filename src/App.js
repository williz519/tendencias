import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Detail/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
