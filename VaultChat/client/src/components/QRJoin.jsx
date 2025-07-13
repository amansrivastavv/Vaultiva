import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import QRCode from 'qrcode.react';

const QRJoin = () => {
  const [roomCode, setRoomCode] = useState('');
  const { activeRoom, setActiveRoom } = useChat();

  return (
    <div className="qr-join">
      <h2>Join Chat Room</h2>
      <div className="join-form">
        <input
          type="text"
          placeholder="Enter room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button onClick={() => setActiveRoom(roomCode)}>Join Room</button>
      </div>
      {activeRoom && (
        <div className="qr-code">
          <p>Scan this QR code to join the chat:</p>
          <QRCode value={`http://localhost:3000/join/${activeRoom}`} size={200} level="H" />
        </div>
      )}
    </div>
  );
};

export default QRJoin;
