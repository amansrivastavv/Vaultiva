module.exports = {
  server: {
    port: 5000,
    environment: process.env.NODE_ENV || 'development'
  },
  database: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/vaultchat'
  },
  security: {
    jwtSecret: process.env.JWT_SECRET,
    passwordSaltRounds: 10
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
};
