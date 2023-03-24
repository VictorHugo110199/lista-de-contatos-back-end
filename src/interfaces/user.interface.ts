export interface IUser {
  id: string;
  name: string;
  email: string;
  number: number;
  createdAt: Date;
  isActive?: boolean;
}

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  number: number;
  isActive?: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  number?: number;
}
