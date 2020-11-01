import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common'

import { UserService } from '~server/modules/user/user.service'
import { CreateUseDto } from '~server/modules/user/user.dto'
import { ValidationPipe } from '~server/pipes/validation.pipe'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUseDto): Promise<{ id: string; username: string }> {
    try {
      const user = await this.userService.createUser(createUserDto)
      return user
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
    }
  }
}
