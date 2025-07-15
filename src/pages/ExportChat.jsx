import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import { exportChat } from '../utils/api';

const ExportChat = () => {
  const [roomCode, setRoomCode] = useState('');
  const [exporting, setExporting] = useState(false);
  const [exportedFile, setExportedFile] = useState(null);
  const [error, setError] = useState(null); // ✅ Fix: Define error state

  const handleExport = async () => {
    try {
      setExporting(true);
      setError(null);
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
      setError('Failed to export chat. Please try again.');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">💾 Export Chat</h1>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleExport}
            disabled={exporting || !roomCode}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
              exporting || !roomCode
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {exporting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Exporting...
              </span>
            ) : (
              '💾 Export Chat'
            )}
          </button>

          {exportedFile && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-700 text-green-300 rounded-lg">
              <p>Chat exported successfully!</p>
              <p>File: chat-export-{exportedFile}.pdf</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExportChat;
