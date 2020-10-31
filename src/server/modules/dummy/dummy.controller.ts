import { Controller, Get } from '@nestjs/common'

import { DummyService } from '~server/modules/dummy/dummy.service'
import { Dummy } from '~shared/types/dummy'

@Controller('api/dummy')
export class DummyController {
  constructor(private dummyService: DummyService) {}

  @Get()
  async one(): Promise<Dummy> {
    return this.dummyService.get()
  }
}
