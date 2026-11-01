import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./Pages/Home";
import { CoinDetails } from "./Pages/CoinDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/coin/:id" element={<CoinDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
