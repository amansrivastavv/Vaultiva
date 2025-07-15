import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ChatProvider } from './context/ChatContext';
import { SocketProvider } from './context/SocketContext';
import Home from './pages/Home';
import ChatModes from './pages/ChatModes';
import PrivateChat from './pages/PrivateChat';
import AnonymousChat from './pages/AnonymousChat';
import GroupChat from './pages/GroupChat';
import ExportChat from './pages/ExportChat';
import Guide from './pages/Guide';
import Navbar from './components/Navbar';
import { Toast } from './components/CustomToast';
import Rooms from './components/Rooms';
import './index.css';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <SocketProvider>
        <ChatProvider>
        <Router>
          <div className="app dark">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat-modes" element={<ChatModes />} />
              <Route path="/private-chat" element={<PrivateChat />} />
              <Route path="/anonymous-chat" element={<AnonymousChat />} />
              <Route path="/group-chat" element={<GroupChat />} />
              <Route path="/export-chat" element={<ExportChat />} />
              <Route path="/how-it-works" element={<Guide />} />
              <Route path="/rooms" element={<Rooms />} />
            </Routes>
            <Toast />
          </div>
        </Router>
      </ChatProvider>
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
