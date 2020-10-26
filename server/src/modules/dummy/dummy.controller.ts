import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common'

import { Dummy } from '~modules/dummy/dummy.schema'
import { DummyService } from '~modules/dummy/dummy.service'
import { CreateDummyDto } from '~modules/dummy/dummy.dto'
import { JwtAuthGuard } from '~modules/auth/auth.jwt-guard'
import { AuthenticatedRequest } from '~types/request'

@Controller('dummy')
export class DummyController {
  constructor(private dummyService: DummyService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() request: AuthenticatedRequest): Promise<Dummy[]> {
    console.log(request.user.username)
    return this.dummyService.findAll()
  }

  @Post()
  async create(@Body() createDummyDto: CreateDummyDto): Promise<Dummy> {
    return this.dummyService.create(createDummyDto)
  }
}
