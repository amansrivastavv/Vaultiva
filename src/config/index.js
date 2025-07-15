const config = {
  // API base URL
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  
  // WebSocket URL
  wsUrl: process.env.REACT_APP_WS_URL || 'ws://localhost:3001',
  
  // Image upload URL
  imageUploadUrl: `${process.env.REACT_APP_API_URL}/api/upload/image`,
  
  // Audio upload URL
  audioUploadUrl: `${process.env.REACT_APP_API_URL}/api/upload/audio`,
  
  // Image CDN URL
  imageCdnUrl: `${process.env.REACT_APP_API_URL}/static/images`,
  
  // Audio CDN URL
  audioCdnUrl: `${process.env.REACT_APP_API_URL}/static/audio`
};

export default config;
