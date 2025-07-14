import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { exportChat } from '../utils/api';

const ExportChat = () => {
  const [roomCode, setRoomCode] = useState('');
  const [exporting, setExporting] = useState(false);
  const [exportedFile, setExportedFile] = useState(null);

  const handleExport = async () => {
    try {
      setExporting(true);
      const blob = await exportChat(roomCode);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `chat-export-${roomCode}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setExportedFile(roomCode);
    } catch (error) {
      console.error('Error exporting chat:', error);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="export-chat">
      <h1>Export Chat</h1>
      <div className="export-form">
        <input
          type="text"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button
          onClick={handleExport}
          disabled={exporting || !roomCode}
        >
          {exporting ? 'Exporting...' : 'Export Chat'}
        </button>
      </div>
      {exportedFile && (
        <div className="export-success">
          <p>Chat exported successfully!</p>
          <p>File: chat-export-{exportedFile}.pdf</p>
        </div>
      )}
    </div>
  );
};

export default ExportChat;
