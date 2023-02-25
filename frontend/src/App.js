import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import CreateClaimPage from "./Pages/CreateClaimPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/createClaim" element={<CreateClaimPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
