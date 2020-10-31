import { Module } from '@nestjs/common'

import { DummyService } from '~server/modules/dummy/dummy.service'
import { DummyController } from '~server/modules/dummy/dummy.controller'

@Module({
  imports: [],
  providers: [DummyService],
  controllers: [DummyController]
})
export class DummyModule {}
