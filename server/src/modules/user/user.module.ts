import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserSchema } from '~modules/user/user.schema'
import { UserService } from '~modules/user/user.service'
import { UserController } from '~modules/user/user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
