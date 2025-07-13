const API_BASE_URL = 'http://localhost:5000/api';

export const fetchRooms = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms`);
    if (!response.ok) throw new Error('Failed to fetch rooms');
    return response.json();
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const createRoom = async (type) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    });
    if (!response.ok) throw new Error('Failed to create room');
    return response.json();
  } catch (error) {
    console.error('Error creating room:', error);
    throw error;
  }
};

export const joinRoom = async (roomId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/rooms/${roomId}/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to join room');
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
