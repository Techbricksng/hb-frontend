import useAuth from '../hooks/useAuth.tsx';
import { useNavigate } from 'react-router-dom';

import { IconLogout } from '@tabler/icons-react';

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return null;
  }

  return (
    <div>
      <IconLogout
        size={18}
        onClick={() => auth.logout(() => navigate('/auth'))}
        className={`cursor-pointer text-[color:var(--color-dark)]`}
      />
    </div>
  );
};

export default AuthStatus;
