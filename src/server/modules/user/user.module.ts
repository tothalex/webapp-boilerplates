import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { User, UserSchema } from '~server/modules/user/user.schema'
import { UserService } from '~server/modules/user/user.service'
import { UserController } from '~server/modules/user/user.controller'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
