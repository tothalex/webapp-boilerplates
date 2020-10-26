import { Model } from 'mongoose';
import { User } from '~modules/user/user.schema';
import { CreateUseDto, UserDto } from '~modules/user/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    createUser(createUserDto: CreateUseDto): Promise<UserDto>;
    findUserById(id: string): Promise<UserDto>;
}
