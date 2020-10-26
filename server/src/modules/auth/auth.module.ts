import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { User, UserSchema } from '~modules/user/user.schema'
import { AuthService } from '~modules/auth/auth.service'
import { AuthController } from '~modules/auth/auth.controller'
import { config } from '~utils/config'
import { JwtStrategy } from '~modules/auth/auth.jwt-strategy'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({ secret: config.jwtSecret }), PassportModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
