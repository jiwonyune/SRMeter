"use strict";
var color_1 = require('color');
var ImageColors = (function () {
    function ImageColors() {
    }
    ImageColors.getColorPalette = function (image) {
        var returnPalette = {
            color1: new color_1.Color('black'),
            color2: new color_1.Color('black'),
            color3: new color_1.Color('black'),
            AndroidPalette: null,
            IosPalette: {}
        };
        var colors = SLColorArt.alloc().initWithImage(image.ios.image);
        returnPalette.color1 = this.UIDeviceRGBColoSpace(colors.backgroundColor.toString());
        returnPalette.color2 = this.UIDeviceRGBColoSpace(colors.primaryColor.toString());
        returnPalette.color3 = this.UIDeviceRGBColoSpace(colors.secondaryColor.toString());
        returnPalette.IosPalette = {
            backgroundColor: this.UIDeviceRGBColoSpace(colors.backgroundColor.toString()),
            primaryColor: this.UIDeviceRGBColoSpace(colors.primaryColor.toString()),
            secondaryColor: this.UIDeviceRGBColoSpace(colors.secondaryColor.toString()),
            detailColor: this.UIDeviceRGBColoSpace(colors.detailColor.toString())
        };
        return returnPalette;
    };
    ImageColors.UIDeviceRGBColoSpace = function (uicolor) {
        var rgbStrings = uicolor.replace('UIDeviceRGBColorSpace ', '').split(' ');
        var rgbNumbers = rgbStrings.map(function (value) { return parseFloat(value) * 255; });
        return new color_1.Color(rgbNumbers[0], rgbNumbers[1], rgbNumbers[2], 1);
    };
    return ImageColors;
}());
exports.ImageColors = ImageColors;
