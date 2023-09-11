export interface ApiResponse<Type> {
  data: Type;
  error: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  avatar: string;
}

export interface IDeck {
  id: number;
  name: string;
  description: string;
  lang: string;
  banner: string;
}

export interface IDeckList extends Array<IDeck> {}
