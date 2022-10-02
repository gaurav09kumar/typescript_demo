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
var Car = /** @class */ (function () {
    function Car() {
        this.numberOfWheels = 4;
    }
    return Car;
}());
var Ferrari = /** @class */ (function (_super) {
    __extends(Ferrari, _super);
    function Ferrari(make, model, year) {
        var _this = _super.call(this) || this;
        _this.make = make;
        _this.model = model;
        _this.year = year;
        return _this;
    }
    return Ferrari;
}(Car));
var ferrariObject = new Ferrari("Ferrai", "Italia", 2012);
console.log("Ferrari car has : " + ferrariObject.numberOfWheels);
console.log("Make : " + ferrariObject.make + " , Model : " + ferrariObject.model + " , Year : " + ferrariObject.year);
