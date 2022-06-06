export type AuthResponse =
  {
      token: string;
      result: true;
      message?: string;
    } | {
      token: undefined;
      result: false;
      message: string;
    };
