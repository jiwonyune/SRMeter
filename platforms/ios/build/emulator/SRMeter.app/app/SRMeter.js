"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SRMeter = (function () {
    function SRMeter(route) {
        this.route = route;
    }
    SRMeter.prototype.ngOnInit = function () {
    };
    SRMeter = __decorate([
        core_1.Component({
            selector: "ns-details",
            templateUrl: "SRMeter.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], SRMeter);
    return SRMeter;
}());
exports.SRMeter = SRMeter;
//# sourceMappingURL=SRMeter.js.map