"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var image_1 = require("ui/image");
var camera = require("nativescript-camera");
var nativescript_image_colors_1 = require('nativescript-image-colors/nativescript-image-colors');
var SRMeterComponent = (function () {
    function SRMeterComponent(route, page) {
        this.route = route;
        this.page = page;
        this.saveToGallery = false;
        this.keepAspectRatio = true;
        this.width = 200;
        this.height = 200;
        page.actionBarHidden = true;
    }
    SRMeterComponent.prototype.ngOnInit = function () {
        var isCameraAvailable = camera.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);
        camera.requestPermissions();
        this.imgSrc = "~/camera.png";
    };
    SRMeterComponent.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        camera.takePicture(options)
            .then(function (imageAsset) {
            _this.ImageRef.nativeElement.src = imageAsset;
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            var image = new image_1.Image();
            image.src = imageAsset;
            var colors = nativescript_image_colors_1.ImageColors.getColorPalette(image);
            console.log("colors.color1: " + colors);
            // console.log("imageAsset.android: " + imageAsset.android);
            // this.colorAnalyzer(imageAsset.android);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    SRMeterComponent.prototype.colorAnalyzer = function (img) {
        console.log("Image loaded to Android");
        try {
            var drawable = img.getDrawable();
        }
        catch (e) {
            console.log("var drawable = img.getDrawable()");
            console.log(e);
        }
        try {
            var bmp = drawable.getBitmap();
        }
        catch (e) {
            console.log("var bmp = drawable.getBitmap()");
            console.log(e);
        }
    };
    __decorate([
        core_1.ViewChild("beerImage"), 
        __metadata('design:type', core_1.ElementRef)
    ], SRMeterComponent.prototype, "ImageRef", void 0);
    SRMeterComponent = __decorate([
        core_1.Component({
            selector: "ns-details",
            templateUrl: "SRMeter.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, page_1.Page])
    ], SRMeterComponent);
    return SRMeterComponent;
}());
exports.SRMeterComponent = SRMeterComponent;
//# sourceMappingURL=SRMeter.component.js.map