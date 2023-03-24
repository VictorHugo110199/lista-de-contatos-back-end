import { IUser } from "./user.interface";

export interface ICreatContact {
  name: string;
  email: string;
  number: number;
  user?: IUser;
}

export interface IContact {
  id: string;
  email: string;
  number: number;
  user: IUser;
}

export interface IContactUpdate {
  name?: string;
  email?: string;
  number?: number;
}
