import {Route, Routes, HashRouter} from "react-router-dom";
import StockSearch from "./pages/StockSearch";
import Header from "./components/Header";

function App() {
  return (
      <HashRouter>
        <Header />
          <Routes>
            <Route  path="/" element={<StockSearch />}/>
          </Routes>
      </HashRouter>
  );
}

export default App;
