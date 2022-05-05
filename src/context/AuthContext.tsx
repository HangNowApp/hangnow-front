import React, { useEffect, useState } from 'react';
import { clientJson } from '~/client/client';
import { JWT } from '~/client/jwr';
import { User } from '~/client/types/User';
import { Nullable } from '~/client/types/utility';

type AuthContextProps = {
  user?: User;
  isLoading: boolean;
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string) => void;
};

const AuthContext = React.createContext<AuthContextProps>({
  isLoading: true,
  isLoggedIn: false,
  logout: () => {},
  login: () => {},
});

type AuthContextProviderProps = { children: React.ReactElement };

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<Nullable<User>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isLoggedIn = Boolean(user);

  const updateUser = () => {
    const token = JWT.getToken();

    if (token) {
      setIsLoading(true);
      clientJson<User>('auth/me')
        .then((res) => {
          setUser(res);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error('err', err);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updateUser();
  }, []);

  const logout = () => {
    JWT.deleteToken();
    setUser(undefined);
  };

  const login = (token: string) => {
    JWT.setToken(token);
    updateUser();
  };

  const values = { user, isLoading, isLoggedIn, logout, login };

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
