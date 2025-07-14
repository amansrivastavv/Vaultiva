import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../routes/routeConfig';
import { useChat } from '../context/ChatContext';

export const useRouteGuard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeRoom } = useChat();

  useEffect(() => {
    // Redirect if trying to access chat pages without a room
    const requiresRoom = location.pathname.includes('chat') && !activeRoom;
    if (requiresRoom) {
      navigate(ROUTES.HOME);
    }

    // Redirect if trying to access join page with a room already active
    const isJoinPage = location.pathname.includes('join');
    if (isJoinPage && activeRoom) {
      navigate(ROUTES.PRIVATE_CHAT);
    }
  }, [location, activeRoom, navigate]);

  return {
    activeRoom,
    location
  };
};
