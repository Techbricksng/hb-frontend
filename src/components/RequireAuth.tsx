import React, { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth.tsx';

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to={'/auth/'} state={{ from: location }} />;
  }
  return children;
};
