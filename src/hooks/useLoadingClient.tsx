import { useCallback, useState } from 'react';
import { clientJson, ClientParameters } from '~/client/client';

export function useLoadingClient() {
  const [isLoading, setIsLoading] = useState(false);

  const run = useCallback(async <T,>(...params: ClientParameters) => {
    setIsLoading(true);
    return clientJson<T>(...params).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return {
    run,
    isLoading,
  };
}
