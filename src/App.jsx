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
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

const authRoutes = [
  {
    path: "/home",
    element: <Home />,
    key: "home",
  },
  {
    path: "/account",
    element: <Account />,
    key: "Account",
  },
  {
    path: "/cards",
    element: <Cards />,
    key: "Cards",
  },
  {
    path: "/loans",
    element: <Loans />,
    key: "Loans",
  },
  {
    path: "/transactions",
    element: <Transactions />,
    key: "Transactions",
  },
  {
    path: "/newLoan",
    element: <NewLoan />,
    key: "NewLoan",
  },
  {
    path: "/newCard",
    element: <NewCard />,
    key: "NewCard",
  },
];

function App() {
  // const { loggedIn } = useSelector((store) => store.auth);

  return (
    <>
      <BrowserRouter basename="/">
        <MainLayouts>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account/:accountId"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cards"
              element={
                <ProtectedRoute>
                  <Cards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/loans"
              element={
                <ProtectedRoute>
                  <Loans />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="/new-card"
              element={
                <ProtectedRoute>
                  <NewCard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/new-loan"
              element={
                <ProtectedRoute>
                  <NewLoan />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MainLayouts>
      </BrowserRouter>
    </>
  );
}

export default App;
