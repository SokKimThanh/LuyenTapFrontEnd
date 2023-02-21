"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CharactersComponent = void 0;
var core_1 = require("@angular/core");
var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(characterService) {
        this.characterService = characterService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterService.getCharacters().subscribe({
            next: function (characters) {
                _this.characters = characters;
                console.log(_this.characters);
            },
            error: function (err) { _this.err = err; }
        });
    };
    CharactersComponent.prototype.onRatingClicked = function (character) {
        this.pageTitle = 'Character list: ' + character.name;
    };
    CharactersComponent.prototype.selected = function (selectedCharacter) {
        this.selectedCharacter = selectedCharacter;
    };
    __decorate([
        core_1.Input()
    ], CharactersComponent.prototype, "selectedCharacter");
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'app-characters',
            templateUrl: './characters.component.html',
            styleUrls: ['./characters.component.css']
        })
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
