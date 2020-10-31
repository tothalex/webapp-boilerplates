import { Module } from '@nestjs/common'

import { ViewController } from '~server/modules/view/view.controller'
import { ViewService } from '~server/modules/view/view.service'

@Module({
  imports: [],
  providers: [ViewService],
  controllers: [ViewController]
})
export class ViewModule {}
