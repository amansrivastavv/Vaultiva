import React from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import QRJoin from '../components/QRJoin';
import { useChat } from '../context/ChatContext';

const GroupChat = () => {
  const { activeRoom } = useChat();

  return (
    <div className="group-chat">
      <h1>Group Chat</h1>
      {!activeRoom ? (
        <div className="join-section">
          <button onClick={() => {
            // Logic to create/join group chat
          }}>
            Join Group Chat
          </button>
        </div>
      ) : (
        <div className="chat-container">
          <ChatBox />
          <MessageInput />
          <QRJoin />
        </div>
      )}
    </div>
  );
};

export default GroupChat;
