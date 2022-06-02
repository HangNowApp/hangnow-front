import React, { useCallback, useEffect, useState } from 'react';
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
  logout: () => void 0,
  login: () => void 0,
  update: async () => Promise.resolve(null),
});

type AuthContextProviderProps = { children: React.ReactElement };

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<Nullable<User>>();
  const { isLoading, run } = useLoadingClient();

  const isLoggedIn = Boolean(user);

  const refreshUser = useCallback(() => {
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
  }, [run]);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const update = async (user: Partial<User>) =>
    run<User>('auth/update', { method: 'PATCH', data: user })
      .then((user) => {
        setUser(user);
        return user;
      })
      .catch(() => null);

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
  return context;
}
