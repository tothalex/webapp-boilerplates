import { Module } from '@nestjs/common'

import { ViewModule } from '~server/modules/view/view.module'
import { DummyModule } from '~server/modules/dummy/dummy.module'

@Module({
  imports: [DummyModule, ViewModule],
  controllers: [],
  providers: []
})
export class AppModule {}
