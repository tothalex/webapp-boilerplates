import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { DummyService } from '~modules/dummy/dummy.service'
import { DummyController } from '~modules/dummy/dummy.controller'
import { Dummy, DummySchema } from '~modules/dummy/dummy.schema'
import { JwtAuthGuard } from '~modules/auth/auth.jwt-guard'

@Module({
  imports: [MongooseModule.forFeature([{ name: Dummy.name, schema: DummySchema }])],
  providers: [DummyService, JwtAuthGuard],
  controllers: [DummyController]
})
export class DummyModule {}
