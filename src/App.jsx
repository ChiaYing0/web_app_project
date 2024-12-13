import SelectionPage from "./components/pages/SelectionPage";
import ChatBotPage from "./components/pages/ChatBotPage";
import LandingPage from "./components/pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import UserProfilePage from "./components/pages/UserProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/chatroom" element={<ChatBotPage />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/userprofile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
