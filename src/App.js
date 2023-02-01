import { Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";
import { Home } from "./components/Home/Home";
import InvestDetail from "./components/investDetail/investDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Detail/:id" element={<Details />} />
        <Route exact path="/Invest/:name" element={<InvestDetail />} />
        <Route exact path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
