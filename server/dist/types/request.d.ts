import { Request } from 'express';
export declare type AuthenticatedRequest = Request & {
    user: {
        userId: string;
        username: string;
    };
};
