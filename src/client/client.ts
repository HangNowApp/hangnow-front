import { JWT } from './jwr';

// get next variable named: "NEXT_API_URL"
const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/';

type config = {
  data?: unknown;
  token?: string | null;
  method?: 'DELETE' | 'GET' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
  headers?: HeadersInit;
  customConfig?: RequestInit;
};

/*
  To call the api.

  To `get` an item
  ```ts
  client("item")
  ```
  Get is the default method if no data provided.

  If you want `POST` an item, you need to provide data.
  If Data was provided, default method is `POST`
  ```ts
  client("item", {data: {name: "John"}})
  ```

  To `patch` / `delete` an item
  ```ts
  client("item/1", {method: "PATCH"})
  ```

  To provide a Token :
  ```ts
  client("item/1", {method: "PATCH", token: "SomeToken"})
  ```

  TODO: You can see example in `client.test.tsx`
*/

export async function client(
  endpoint: string,
  {
    data,
    method,
    token = JWT.getToken(),
    headers: customHeaders,
    customConfig,
  }: config = {}
): Promise<Response> {
  const config: RequestInit = {
    method: method ?? (data ? 'POST' : 'GET'),
    body: data ? JSON.stringify(data) : null,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
      Accept: 'application/json',
      ...customHeaders,
    },
    ...customConfig,
  };

  return fetch(`${BASE_URL}api/${endpoint}`, config).then(async (response) => {
    // statusCode "401" is for unauthenticated request
    if (response.status === 401) {
      return Promise.reject({ message: 'Please re-authenticate.' });
    }

    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  });
}

export type ClientParameters = Parameters<typeof client>;

export const clientJson = async <T>(...params: ClientParameters): Promise<T> =>
  client(...params).then(async (r) => r.json());

export const clientText = async (
  ...params: ClientParameters
): Promise<string> => client(...params).then(async (r) => r.text());
