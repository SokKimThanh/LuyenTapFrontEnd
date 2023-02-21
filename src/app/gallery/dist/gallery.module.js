"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GalleryModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var gallery_detail_component_1 = require("./gallery-detail.component");
var gallery_component_1 = require("./gallery.component");
var platform_browser_1 = require("@angular/platform-browser");
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule = __decorate([
        core_1.NgModule({
            declarations: [
                gallery_component_1.GalleryComponent,
                gallery_detail_component_1.GalleryDetailComponent,
            ],
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forChild([
                    { path: 'gallery', component: gallery_component_1.GalleryComponent },
                    { path: 'gallery/:id', component: gallery_detail_component_1.GalleryDetailComponent }
                ])
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());
exports.GalleryModule = GalleryModule;
