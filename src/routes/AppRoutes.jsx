import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import ChatModes from '../pages/ChatModes';
import PrivateChat from '../pages/PrivateChat';
import AnonymousChat from '../pages/AnonymousChat';
import GroupChat from '../pages/GroupChat';
import ExportChat from '../pages/ExportChat';
import ProtectedRoute from './ProtectedRoute';
import { ROUTES } from './routeConfig';
import { useNavigation } from '../hooks/useNavigation';
import Guide from '../pages/Guide'; 

const AppRoutes = () => {
  const location = useLocation();
  const { navigateTo } = useNavigation();

  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.CHAT_MODES} element={<ChatModes />} />
      <Route
        path={ROUTES.PRIVATE_CHAT}
        element={
          <ProtectedRoute requiresRoom>
            <PrivateChat />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.ANONYMOUS_CHAT}
        element={
          <ProtectedRoute requiresRoom>
            <AnonymousChat />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.GROUP_CHAT}
        element={
          <ProtectedRoute requiresRoom>
            <GroupChat />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.EXPORT_CHAT} element={<ExportChat />} />
      <Route
        path={ROUTES.JOIN_ROOM}
        element={
          <ProtectedRoute>
            <PrivateChat />
          </ProtectedRoute>
        }
      />
      <Route path={ROUTES.GUIDE} element={<Guide />} /> 
      
    </Routes>
    
  );
};

export default AppRoutes;
