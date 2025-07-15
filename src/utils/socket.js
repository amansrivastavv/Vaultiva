import config from '../config';

let socket = null;

const connectSocket = (token) => {
  if (socket) {
    socket.close();
  }

  socket = new WebSocket(`${config.wsUrl}?token=${token}`);

  socket.onopen = () => {
    console.log('WebSocket Connected');
  };

  socket.onclose = () => {
    console.log('WebSocket Disconnected');
    // Attempt to reconnect after 5 seconds
    setTimeout(() => connectSocket(token), 5000);
  };

  socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
  };

  return socket;
};

export default connectSocket;
