import { Controller, Post, Body, BadRequestException } from '@nestjs/common'

import { AuthLoginDto } from '~modules/auth/auth.dto'
import { AuthService } from '~modules/auth/auth.service'
import { ValidationPipe } from '~pipes/validation.pipe'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body(new ValidationPipe()) authLoginDto: AuthLoginDto): Promise<string> {
    try {
      if (!(await this.authService.validateUser(authLoginDto))) {
        throw new BadRequestException('Invalid password')
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
    return this.authService.signToken(authLoginDto.username)
  }
}
