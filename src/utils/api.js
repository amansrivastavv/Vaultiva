const API_BASE_URL = 'http://localhost:3001/api';

export const fetchRooms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to fetch rooms');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const createRoom = async (type) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        type,
        passcode: type === 'private' ? Math.random().toString(36).substring(2, 15) : null,
        isAnonymous: type === 'anonymous'
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to create room');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};

export const joinRoom = async (roomId, passcode) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ roomId, passcode })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to join room');
    }
    
    return response.json();
  } catch (error) {
    console.error('Error joining room:', error);
    throw error;
  }
};

export const exportChat = async (roomId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/export/${roomId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to export chat');
    return response.blob();
  } catch (error) {
    console.error('Error exporting chat:', error);
    throw error;
  }
};
