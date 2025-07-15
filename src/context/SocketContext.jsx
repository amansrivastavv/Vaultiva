import React, { createContext, useState, useEffect } from 'react';
import io from 'socket.io-client';

export const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io('http://localhost:3001', {
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: Infinity,
      timeout: 10000,
      autoConnect: false,
      auth: {
        token: localStorage.getItem('token') || ''
      },
      query: {
        client: 'web'
      }
    });

    // Handle connection events
    socketInstance.on('connect', () => {
      console.log('WebSocket Connected');
      socketInstance.emit('client_ready');
    });

    socketInstance.on('connect_error', (error) => {
      console.error('WebSocket Connection Error:', error);
      if (error.message.includes('timeout')) {
        console.error('Connection timed out, retrying...');
        setTimeout(() => {
          socketInstance.connect();
        }, 5000);
      } else {
        // Try to reconnect immediately
        socketInstance.connect();
      }
    });

    socketInstance.on('connect_timeout', () => {
      console.error('WebSocket Connection Timeout');
      // Try to reconnect after a delay
      setTimeout(() => {
        socketInstance.connect();
      }, 5000);
    });

    socketInstance.on('disconnect', (reason) => {
      console.log('WebSocket Disconnected:', reason);
      if (reason === 'io server disconnect') {
        // The server might have restarted, try to reconnect
        setTimeout(() => {
          socketInstance.connect();
        }, 5000);
      }
    });

    socketInstance.on('reconnect_error', (error) => {
      console.error('Reconnection Error:', error);
    });

    socketInstance.on('reconnect_failed', () => {
      console.error('Reconnection Failed');
    });

    socketInstance.connect();
    setSocket(socketInstance);

    return () => {
      socketInstance.off('connect');
      socketInstance.off('connect_error');
      socketInstance.off('connect_timeout');
      socketInstance.off('disconnect');
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
