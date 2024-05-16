import "./styles/App.css";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <>
      <MainLayouts>
        <Home />
        {/* <Account /> */}
        {/* <Cards /> */}
        {/* <Loans /> */}
        {/* <Transactions /> */}
      </MainLayouts>
    </>
  );
}

export default App;
