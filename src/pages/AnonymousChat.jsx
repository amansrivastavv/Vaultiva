import React from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import { useChat } from '../context/ChatContext';

const AnonymousChat = () => {
  const { activeRoom, setActiveRoom, socket } = useChat();

  return (
    <div className="anonymous-chat">
      <h1>Anonymous Chat</h1>
      {!activeRoom ? (
        <div className="join-section">
          <button onClick={() => {
            if (socket) {
              setActiveRoom('anonymous');
              socket.emit('joinRoom', { room: 'anonymous' });
            }
          }}>
            Join Anonymous Chat
          </button>
        </div>
      ) : (
        <div className="chat-container">
          <ChatBox />
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default AnonymousChat;
