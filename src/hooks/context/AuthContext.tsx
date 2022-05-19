import React, { useEffect, useState } from 'react';
import { JWT } from '~/client/jwr';
import { User } from '~/client/types/User';
import { Nullable } from '~/client/types/utility';
import { useLoadingClient } from '../useLoadingClient';

type AuthContextProps = {
  user?: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string) => void;
  update: (user: Partial<User>) => Promise<User | null>;
};

const AuthContext = React.createContext<AuthContextProps>({
  isLoading: true,
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
  update: () => Promise.resolve(null),
});

type AuthContextProviderProps = { children: React.ReactElement };

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<Nullable<User>>();
  const { isLoading, run } = useLoadingClient();

  const isLoggedIn = Boolean(user);

  const refreshUser = () => {
    const token = JWT.getToken();

    if (!token) {
      return;
    }
    run<User>('auth/me')
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.error('err', err);
      });
  };

  useEffect(() => {
    refreshUser();
  }, []);

  const update = async (user: Partial<User>) => {
    return run<User>('auth/update', { method: 'PATCH', data: user })
      .then((user) => {
        setUser(user);
        return user;
      })
      .catch((err) => {
        return null;
      });
  };

  const logout = () => {
    JWT.deleteToken();
    setUser(undefined);
  };

  const login = (token: string) => {
    JWT.setToken(token);
    refreshUser();
  };

  const values = { user, isLoading, isLoggedIn, logout, login, update };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error(
      'useSessionContext should be used within a SessionContextProvider'
    );
  return context;
}
