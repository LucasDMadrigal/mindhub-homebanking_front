import "./styles/App.css";
import MainLayouts from "./layouts/MainLayouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Transactions from "./pages/Transactions";
import NewCard from "./pages/NewCard";
import NewLoan from "./pages/NewLoan";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <MainLayouts>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/new-card" element={<NewCard />} />
            <Route path="/new-loan" element={<NewLoan />} />
          </Routes>
        </MainLayouts>
      </BrowserRouter>
    </>
  );
}

export default App;
