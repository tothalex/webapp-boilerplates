import { UserService } from '~modules/user/user.service';
import { CreateUseDto } from '~modules/user/user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUseDto): Promise<{
        id: string;
        username: string;
    }>;
}
