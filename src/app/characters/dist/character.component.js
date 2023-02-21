"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CharacterComponent = void 0;
var core_1 = require("@angular/core");
var CharacterComponent = /** @class */ (function () {
    function CharacterComponent() {
        this.notify = new core_1.EventEmitter();
    }
    CharacterComponent.prototype.ngOnChanges = function () {
        this.messages = "You are clicked " + this.character.id + ". " + this.character.name;
        console.log(this.messages);
    };
    CharacterComponent.prototype.onClick = function () {
        this.notify.emit(this.character);
    };
    __decorate([
        core_1.Input()
    ], CharacterComponent.prototype, "character");
    __decorate([
        core_1.Output()
    ], CharacterComponent.prototype, "notify");
    CharacterComponent = __decorate([
        core_1.Component({
            selector: 'app-story-character',
            templateUrl: './character.component.html',
            styleUrls: ['./character.component.css']
        })
    ], CharacterComponent);
    return CharacterComponent;
}());
exports.CharacterComponent = CharacterComponent;
