import { Strategy } from 'passport-jwt';
import { ValidatePayload } from '~types/auth';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: ValidatePayload): Promise<ValidatePayload>;
}
export {};
