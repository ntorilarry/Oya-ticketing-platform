import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate replace to="login" />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
