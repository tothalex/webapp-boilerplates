import { Module } from '@nestjs/common'

import { ViewModule } from '~modules/view/view.module'
import { DummyModule } from '~modules/dummy/dummy.module'

@Module({
  imports: [DummyModule, ViewModule],
  controllers: [],
  providers: []
})
export class AppModule {}
