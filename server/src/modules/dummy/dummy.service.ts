import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Dummy } from '~modules/dummy/dummy.schema'
import { CreateDummyDto } from '~modules/dummy/dummy.dto'

@Injectable()
export class DummyService {
  constructor(@InjectModel(Dummy.name) private dummyModel: Model<Dummy>) {}

  async create(createDummyDto: CreateDummyDto): Promise<Dummy> {
    const createdDummy = new this.dummyModel(createDummyDto)
    return createdDummy.save()
  }

  async findAll(): Promise<Dummy[]> {
    return this.dummyModel.find().exec()
  }
}
