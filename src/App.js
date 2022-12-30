import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CampaignCreated from "./pages/CampaignCreated";
import CreateCampaign from "./pages/CreateCampaign";
import LogIn from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate replace to="welcome" />} />
          <Route path="welcome" element={<LogIn />} />
          <Route path="create-campaign" element={<CreateCampaign />} />
          <Route path="campaign-created" element={<CampaignCreated />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
