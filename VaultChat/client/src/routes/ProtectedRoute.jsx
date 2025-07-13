import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from './routeConfig';

const ProtectedRoute = ({ children, requiresRoom = false }) => {
  const { activeRoom } = useChat();

  if (requiresRoom && !activeRoom) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};

export default ProtectedRoute;
