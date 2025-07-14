import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';
import Home from './pages/Home';
import ChatModes from './pages/ChatModes';
import PrivateChat from './pages/PrivateChat';
import AnonymousChat from './pages/AnonymousChat';
import GroupChat from './pages/GroupChat';
import ExportChat from './pages/ExportChat';
import Guide from './pages/Guide';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <ChatProvider>
        <Router>
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat-modes" element={<ChatModes />} />
              <Route path="/private-chat" element={<PrivateChat />} />
              <Route path="/anonymous-chat" element={<AnonymousChat />} />
              <Route path="/group-chat" element={<GroupChat />} />
              <Route path="/export-chat" element={<ExportChat />} />
              <Route path="/how-it-works" element={<Guide />} />
            </Routes>
          </div>
        </Router>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
