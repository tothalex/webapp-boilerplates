import { Module } from '@nestjs/common'

import { DummyService } from '~modules/dummy/dummy.service'
import { DummyController } from '~modules/dummy/dummy.controller'

@Module({
  imports: [],
  providers: [DummyService],
  controllers: [DummyController]
})
export class DummyModule {}
