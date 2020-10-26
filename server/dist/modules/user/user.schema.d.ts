import { Document } from 'mongoose';
export declare class User extends Document {
    username: string;
    password: string;
}
export declare const UserSchema: import("mongoose").Schema<any>;
