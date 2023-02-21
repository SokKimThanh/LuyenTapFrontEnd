"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GalleryComponent = void 0;
var core_1 = require("@angular/core");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(galleryService) {
        this.galleryService = galleryService;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.showGalleries();
    };
    GalleryComponent.prototype.showGalleries = function () {
        var _this = this;
        this.galleryService.getGalleries()
            // clone the data object, using its known IPhoto shape
            .subscribe({
            next: function (photos) {
                _this.photos = photos;
            },
            error: function (err) { return _this.errorMessage = err; }
        });
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            templateUrl: './gallery.component.html',
            styleUrls: ['./gallery.component.css']
        })
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
