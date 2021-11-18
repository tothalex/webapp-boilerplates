import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { ViewModule } from '~server/modules/view/view.module'
import { DummyModule } from '~server/modules/dummy/dummy.module'
import { UserModule } from '~server/modules/user/user.module'
// import { AuthModule } from '~server/modules/auth/auth.module'
import { config } from '~server/utils/config'

@Module({
  imports: [MongooseModule.forRoot(config.mongo), DummyModule, UserModule, ViewModule],
  controllers: [],
  providers: []
})
export class AppModule {}
