import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { clientJson } from '~/client/client';
import { AuthResponse } from '~/client/types/Auth';
import { useAuthContext } from './context/AuthContext';

export function useAuthForm(type: 'login' | 'register') {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const authContext = useAuthContext();

  const authRequest = (data: unknown) => {
    clientJson<AuthResponse>(`auth/${type}`, { data })
      .then((res) => {
        if (res.result) {
          router.push('/');
          authContext.login(res.token);
        } else {
          enqueueSnackbar(res.message, { variant: 'error' });
        }
      })
      .catch((res) => {
        if (!res) return;
        res.json().then((res: AuthResponse) => {
          if (!res.result) {
            enqueueSnackbar(res.message, { variant: 'error' });
          }
        });
      });
  };

  return { authRequest };
}
