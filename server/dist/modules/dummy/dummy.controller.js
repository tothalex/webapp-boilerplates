"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DummyController = void 0;
const common_1 = require("@nestjs/common");
const dummy_schema_1 = require("./dummy.schema");
const dummy_service_1 = require("./dummy.service");
const dummy_dto_1 = require("./dummy.dto");
const auth_jwt_guard_1 = require("../auth/auth.jwt-guard");
const request_1 = require("../../types/request");
let DummyController = class DummyController {
    constructor(dummyService) {
        this.dummyService = dummyService;
    }
    async findAll(request) {
        console.log(request.user.username);
        return this.dummyService.findAll();
    }
    async create(createDummyDto) {
        return this.dummyService.create(createDummyDto);
    }
};
__decorate([
    common_1.UseGuards(auth_jwt_guard_1.JwtAuthGuard),
    common_1.Get(),
    __param(0, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dummy_dto_1.CreateDummyDto]),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "create", null);
DummyController = __decorate([
    common_1.Controller('dummy'),
    __metadata("design:paramtypes", [dummy_service_1.DummyService])
], DummyController);
exports.DummyController = DummyController;
//# sourceMappingURL=dummy.controller.js.map