"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var camera = require("nativescript-camera");
var SRMeterComponent = (function () {
    function SRMeterComponent(route, page) {
        this.route = route;
        this.page = page;
        // public imageTaken: ImageAsset;
        this.saveToGallery = true;
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
            // var image = new Image();
            // image.src = imageAsset;
            var image = _this.ImageRef.nativeElement;
            // var colors = ImageColors.getColorPalette(image);
            // console.log("colors.color1: " + colors.color1);
            console.log("image.android: " + image.android);
            // console.log("imageAsset.android.getDrawable().getBitmap(): " + image.android.getDrawable().getBitmap());
            // console.log("image.android: " + image.android);
            _this.colorAnalyzer(image.android);
            // let colors = ImageColors.getColorPalette(image);
            // console.log("colors.color1: " + colors.color1)
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    SRMeterComponent.prototype.colorAnalyzer = function (img) {
        console.log("Image loaded to Android");
        try {
            var drawable = img.getDrawable();
            console.log("drawable: " + drawable);
        }
        catch (e) {
            console.log("var drawable = img.getDrawable()");
            console.log(e);
        }
        try {
            var bmp = drawable.getBitmap();
            console.log("bmp: " + bmp);
        }
        catch (e) {
            console.log("var bmp = drawable.getBitmap()");
            console.log(e);
        }
        // var Palette = new android.support.v7.graphics.Palette.from(bmp).generate();
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