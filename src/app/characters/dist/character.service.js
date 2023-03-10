"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CharacterService = exports.Character = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
exports.Character = Character;
var CharacterService = /** @class */ (function () {
    function CharacterService(http) {
        this.http = http;
    }
    CharacterService.prototype.getCharacters = function () {
        return this.http
            .get('api/characters.json')
            .pipe(operators_1.tap(function (data) { return console.log('All: ' + JSON.stringify(data)); }), operators_1.catchError(this.handleError));
    };
    CharacterService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs_1.throwError(errorMessage);
    };
    CharacterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CharacterService);
    return CharacterService;
}());
exports.CharacterService = CharacterService;
