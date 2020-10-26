import { Model } from 'mongoose';
import { Dummy } from '~modules/dummy/dummy.schema';
import { CreateDummyDto } from '~modules/dummy/dummy.dto';
export declare class DummyService {
    private dummyModel;
    constructor(dummyModel: Model<Dummy>);
    create(createDummyDto: CreateDummyDto): Promise<Dummy>;
    findAll(): Promise<Dummy[]>;
}
