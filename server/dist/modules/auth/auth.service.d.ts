import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from '~modules/user/user.schema';
import { AuthLoginDto } from '~modules/auth/auth.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    validateUser(authLoginDto: AuthLoginDto): Promise<boolean>;
    signToken(username: string): Promise<string>;
}
