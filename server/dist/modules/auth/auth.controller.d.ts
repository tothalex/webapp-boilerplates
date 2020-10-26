import { AuthLoginDto } from '~modules/auth/auth.dto';
import { AuthService } from '~modules/auth/auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(authLoginDto: AuthLoginDto): Promise<string>;
}
