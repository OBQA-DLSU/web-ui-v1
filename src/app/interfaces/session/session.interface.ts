import { IUser } from '../user/user.interface';

export interface ISession {
    User:IUser;
    token:string;
}