export type AuthResponse =
  | {
      token: undefined;
      result: false;
      message: string;
    }
  | {
      token: string;
      result: true;
      message?: string;
    };
