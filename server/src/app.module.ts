import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DummyModule } from '~modules/dummy/dummy.module'
import { UserModule } from '~modules/user/user.module'
import { AuthModule } from '~modules/auth/auth.module'
import { config } from '~utils/config'

@Module({
  imports: [MongooseModule.forRoot(config.mongo), DummyModule, UserModule, AuthModule],
  controllers: [],
  providers: []
})
export class AppModule {}
