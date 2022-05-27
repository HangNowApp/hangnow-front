import { useState } from 'react';
import { clientJson, ClientParameters } from '~/client/client';

export function useLoadingClient() {
  const [isLoading, setIsLoading] = useState(false);

  async function run<T>(...params: ClientParameters) {
    setIsLoading(true);
    return clientJson<T>(...params).finally(() => setIsLoading(false));
  }

  return {
    run,
    isLoading,
  };
}
