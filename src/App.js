// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectionPage from './SelectionPage';
import ChatRoom from './ChatRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/chatroom" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
