import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Page } from "ui/page";

import { ImageAsset } from "image-asset";
import { Image } from "ui/image";
import * as camera from "nativescript-camera";
import * as ImageSourceModule from "image-source";

import { ImageColors } from 'nativescript-image-colors/nativescript-image-colors';

import app = require("application");
import platform = require("platform");

import { View } from 'ui/core/view';
import { Color } from 'color';

@Component({
    selector: "ns-details",
    templateUrl: "SRMeter.component.html",
})
export class SRMeterComponent implements OnInit {
    public imgSrc; 

    constructor(
        private route: ActivatedRoute,
        private page : Page
    ) { page.actionBarHidden = true; }

    ngOnInit(): void {
        let isCameraAvailable = camera.isAvailable();
        console.log("Is camera hardware available: " + isCameraAvailable);

        camera.requestPermissions();

        this.imgSrc = "~/camera.png"
    }

    @ViewChild("beerImage") ImageRef: ElementRef;

    public imageTaken: ImageAsset;
    public saveToGallery: boolean = false;
    public keepAspectRatio: boolean = true;
    public width: number = 200;
    public height: number = 200;

    onTakePhoto() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };

        camera.takePicture(options)
            .then(imageAsset => {
                this.ImageRef.nativeElement.src = imageAsset;
                console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);

                var image = new Image();
                image.src = imageAsset;

                var colors = ImageColors.getColorPalette(image);
                console.log("colors.color1: " + colors.color1);

                // console.log("imageAsset.android: " + imageAsset.android);
                // this.colorAnalyzer(imageAsset.android);
            }).catch(err => {
                console.log(err.message);
            });
    }

    colorAnalyzer(img) {
        console.log("Image loaded to Android");

        try {
            var drawable = img.getDrawable();
        } catch(e) {
            console.log("var drawable = img.getDrawable()");
            console.log(e);
        }
        
        try {
            var bmp = drawable.getBitmap();
        } catch(e) {
            console.log("var bmp = drawable.getBitmap()");
            console.log(e);
        }
    }
}
