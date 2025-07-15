import React, { createContext, useState, useContext } from 'react';
import io from 'socket.io-client';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [activeRoom, setActiveRoom] = useState(null);
  const [socket, setSocket] = useState(null);

  React.useEffect(() => {
    connectSocket();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const connectSocket = () => {
    const newSocket = io('http://localhost:5000');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('message', (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    newSocket.on('typing', (users) => {
      setTypingUsers(users);
    });
  };

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
        connectSocket,
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
