import { Dummy } from '~modules/dummy/dummy.schema';
import { DummyService } from '~modules/dummy/dummy.service';
import { CreateDummyDto } from '~modules/dummy/dummy.dto';
import { AuthenticatedRequest } from '~types/request';
export declare class DummyController {
    private dummyService;
    constructor(dummyService: DummyService);
    findAll(request: AuthenticatedRequest): Promise<Dummy[]>;
    create(createDummyDto: CreateDummyDto): Promise<Dummy>;
}
