import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as argon2 from 'argon2'
import { JwtService } from '@nestjs/jwt'

import { User } from '~modules/user/user.schema'
import { AuthLoginDto } from '~modules/auth/auth.dto'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>, private jwtService: JwtService) {}

  async validateUser(authLoginDto: AuthLoginDto): Promise<boolean> {
    const user = await this.userModel.findOne({ username: authLoginDto.username })
    if (!user) {
      throw new Error('username-not-found')
    }
    return await argon2.verify(user.password, authLoginDto.password)
  }

  async signToken(username: string): Promise<string> {
    const user = await this.userModel.findOne({ username })
    if (!user) {
      throw new Error('username-not-found')
    }
    return this.jwtService.sign({ id: user.id, username })
  }
}
