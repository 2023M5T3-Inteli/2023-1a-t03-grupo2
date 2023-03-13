"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppController = void 0;
var common_1 = require("@nestjs/common");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.getReconhecimento = function () {
        return this.appService.getReconhecimento();
    };
    AppController.prototype.getProjetos = function () {
        return this.appService.getProjetos();
    };
    AppController.prototype.getDetails = function () {
        return this.appService.getDetails();
    };
    AppController.prototype.getParticipantes = function () {
        return this.appService.getParticipantes();
    };
    AppController.prototype.getDownload = function () {
        return "download page";
    };
    // @Post('projetos/candidatar')
    // create(applyToProjecto: ApplyProject) {
    //   return 'new candidato';
    // }
    // @Post('projetos/criar')
    // create() {
    //   return 'new projeto';
    // }
    AppController.prototype.create = function () {
        return "Post realizado";
    };
    AppController.prototype.getPost = function () {
        return "post";
    };
    __decorate([
        (0, common_1.Get)('reconhecimento')
    ], AppController.prototype, "getReconhecimento");
    __decorate([
        (0, common_1.Get)('projetos')
    ], AppController.prototype, "getProjetos");
    __decorate([
        (0, common_1.Get)('projetos/detalhes')
    ], AppController.prototype, "getDetails");
    __decorate([
        (0, common_1.Get)('projetos/participantes')
    ], AppController.prototype, "getParticipantes");
    __decorate([
        (0, common_1.Get)('download')
    ], AppController.prototype, "getDownload");
    __decorate([
        (0, common_1.Post)('post')
    ], AppController.prototype, "create");
    __decorate([
        (0, common_1.Get)('post')
    ], AppController.prototype, "getPost");
    AppController = __decorate([
        (0, common_1.Controller)()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
