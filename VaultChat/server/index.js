const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const config = require('../vaultchat.config');

const privateRoutes = require('./routes/privateRoutes');
const groupRoutes = require('./routes/groupRoutes');
const exportRoutes = require('./routes/exportRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit(config.rateLimit);
app.use(limiter);

// Routes
app.use('/api/private', privateRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/export', exportRoutes);

// Socket.IO setup
require('./sockets/privateChat')(io);
require('./sockets/anonymousChat')(io);
require('./sockets/groupChat')(io);
require('./sockets/typing')(io);

const PORT = config.server.port;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
