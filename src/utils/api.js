const API_BASE_URL = 'http://localhost:3001';

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
    console.log('Creating room with type:', type);
    const response = await fetch(`${API_BASE_URL}/rooms/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        type
      })
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create room');
    }
    
    const data = await response.json();
    console.log('Room created:', data);
    return data;
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
