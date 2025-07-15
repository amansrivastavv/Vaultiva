import React, { createContext, useState, useContext } from 'react';
import { SocketContext } from './SocketContext';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const socket = useContext(SocketContext);

  React.useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    socket.on('typing', (user) => {
      setTypingUsers(prev => [...prev, user]);
    });

    socket.on('stop-typing', (user) => {
      setTypingUsers(prev => prev.filter(u => u !== user));
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      if (socket) {
        socket.off('connect');
        socket.off('message');
        socket.off('typing');
        socket.off('stop-typing');
        socket.off('disconnect');
      }
    };
  }, [socket]);

  const sendMessage = (message, type = 'text') => {
    if (!socket) return;
    socket.emit('message', { message, type, room: activeRoom });
  };

  const startTyping = () => {
    if (!socket) return;
    socket.emit('typing', { room: activeRoom });
  };

  const stopTyping = () => {
    if (!socket) return;
    socket.emit('stopTyping', { room: activeRoom });
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        typingUsers,
        activeRoom,
        socket,
        sendMessage,
        startTyping,
        stopTyping,
        setActiveRoom
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
