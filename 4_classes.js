// В TS существуют такие модификаторы классов
// abstract,
// static,
// public,
// private,
// protected
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var testAbs = /** @class */ (function () {
    function testAbs() {
        this.data = "hello from abstract class";
        console.log("message from abstract constructor");
    }
    testAbs.prototype.message = function () {
        return this.data;
    };
    return testAbs;
}());
var firstClass = /** @class */ (function (_super) {
    __extends(firstClass, _super);
    function firstClass() {
        var _this = _super.call(this) || this;
        _this.message();
        return _this;
    }
    return firstClass;
}(testAbs));
var fClass = new firstClass();
var Rocket = /** @class */ (function () {
    function Rocket() {
        this.time = 10;
        this.start(this.time);
    }
    Rocket.prototype.start = function (timer) {
        for (var i = timer; i > 0; i--) {
            console.log(i);
        }
    };
    return Rocket;
}());
var Start = /** @class */ (function (_super) {
    __extends(Start, _super);
    function Start() {
        var _this = _super.call(this) || this;
        _this.end();
        return _this;
    }
    Start.prototype.end = function () {
        console.log("ПОЕХАЛИ");
    };
    return Start;
}(Rocket));
var power = new Start();
