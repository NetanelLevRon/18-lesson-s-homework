var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Passenger = (function (_super) {
    __extends(Passenger, _super);
    function Passenger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Passenger.prototype, "passportNumber", {
        get: function () {
            return this._passportNumber;
        },
        ///////////// set & get
        set: function (num) {
            this._passportNumber = num;
        },
        enumerable: true,
        configurable: true
    });
    //////////// functions
    Passenger.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        document.write("Passport number:" + this.passportNumber + ".<br/><br/>");
    };
    return Passenger;
}(Person));
//# sourceMappingURL=passenger.js.map