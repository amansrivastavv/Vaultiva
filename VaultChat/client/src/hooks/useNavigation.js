import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routeConfig';

export const useNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = {
    home: () => navigate(ROUTES.HOME),
    chatModes: () => navigate(ROUTES.CHAT_MODES),
    privateChat: () => navigate(ROUTES.PRIVATE_CHAT),
    anonymousChat: () => navigate(ROUTES.ANONYMOUS_CHAT),
    groupChat: () => navigate(ROUTES.GROUP_CHAT),
    exportChat: () => navigate(ROUTES.EXPORT_CHAT),
    joinRoom: (roomCode) => navigate(ROUTES.JOIN_ROOM.replace(':roomCode', roomCode))
  };

  const goBack = () => navigate(-1);

  return {
    navigateTo,
    goBack
  };
};
