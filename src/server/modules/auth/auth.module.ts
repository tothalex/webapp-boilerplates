import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

import { User, UserSchema } from '~server/modules/user/user.schema'
import { AuthService } from '~server/modules/auth/auth.service'
import { AuthController } from '~server/modules/auth/auth.controller'
import { config } from '~server/utils/config'
import { JwtStrategy } from '~server/modules/auth/auth.jwt-strategy'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), JwtModule.register({ secret: config.jwtSecret }), PassportModule],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
