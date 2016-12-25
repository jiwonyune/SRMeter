"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var SRMeter_component_1 = require('./SRMeter.component');
var routes = [
    { path: '', redirectTo: '/SRMeter', pathMatch: 'full' },
    { path: 'SRMeter', component: SRMeter_component_1.SRMeterComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map