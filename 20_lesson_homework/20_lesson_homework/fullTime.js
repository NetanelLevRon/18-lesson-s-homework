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
var FullTime = (function (_super) {
    __extends(FullTime, _super);
    ///////// ctor
    function FullTime(day, year, month, hour, minutes, seconds) {
        var _this = _super.call(this, day, year, month) || this;
        _this.hour = hour;
        _this.minutes = minutes;
        _this.seconds = seconds;
        return _this;
    }
    Object.defineProperty(FullTime.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (prop) {
            if (prop <= 24 && prop >= 0) {
                this._hour = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (prop) {
            if (prop <= 60 && prop >= 0) {
                this._minutes = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (prop) {
            if (prop <= 60 && prop >= 0) {
                this._seconds = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    //////// func
    FullTime.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ("<br/>Time:&nbsp" + this.hour + ":" + this.minutes + ":" + this.seconds + ".");
    };
    return FullTime;
}(BasicDate));
//# sourceMappingURL=fullTime.js.map