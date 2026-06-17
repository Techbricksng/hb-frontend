import React from 'react';
import { useCookies } from 'react-cookie';
import {
  useRegisterUserMutation,
  useLogoutUserMutation,
  useLoginInUserMutation,
} from '../redux/housebank.ts';

import { COOKIE_AGE } from '../utils/cookie.ts';

interface AuthContextType {
  user: string;
  login: (user: Partial<any>) => Promise<any>;
  register: (user: Partial<any>) => Promise<any>;
  logout: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cookies, setCookies, removeCookies] = useCookies();
  const [registerUser] = useRegisterUserMutation();
  const [logoutUser] = useLogoutUserMutation();
  const [loginInUser] = useLoginInUserMutation();
  const [user, setUser] = React.useState<string>(cookies['note_user']);

  const login = async (user: Partial<any>) => {
    const loginResponse = await loginInUser({
      userName: user.username as string,
      password: user.password as string,
    });
    if (loginResponse.data) {
      const { token, user } = loginResponse.data;
      setUser(() => user);
      setCookies('note_user', user.username, { maxAge: COOKIE_AGE });
      setCookies('note_user_id', user.id, { maxAge: COOKIE_AGE });
      setCookies('note_user_token', token, { maxAge: COOKIE_AGE });
      return user;
    } else {
      return loginResponse.error;
    }
  };
  const register = async (user: Partial<any>) => {
    const registerResponse = await registerUser(user);
    if (registerResponse.data) {
      const { token, user } = registerResponse.data;
      setUser(() => user);
      setCookies('note_user', user.username, { maxAge: COOKIE_AGE });
      setCookies('note_user_id', user.id, { maxAge: COOKIE_AGE });
      setCookies('note_user_token', token, { maxAge: COOKIE_AGE });
      return user;
    } else {
      return registerResponse.error;
    }
  };
  const logout = async (callback: VoidFunction) => {
    const logoutResponse = await logoutUser({});
    setUser(logoutResponse.data);
    removeCookies('note_user', { path: '/' });
    removeCookies('note_user_id', { path: '/' });
    removeCookies('note_user_token', { path: '/' });
    return callback();
  };
  const providerValue = { user, login, register, logout };
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};
