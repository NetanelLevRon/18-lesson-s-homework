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
var FlightAttendant = (function (_super) {
    __extends(FlightAttendant, _super);
    function FlightAttendant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FlightAttendant.prototype, "countryOfOrigin", {
        get: function () {
            return this._countryOfOrigin;
        },
        ///////////// set & get
        set: function (country) {
            this._countryOfOrigin = country;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightAttendant.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (years) {
            this._seniority = years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlightAttendant.prototype, "travelClass", {
        get: function () {
            return this._travelClass;
        },
        /**  travelClass. enter type of class- can be only: "first" or "business" or "economiy" if not one of those options, by default it will be "economiy class".*/
        set: function (classType) {
            if (classType == "first" || classType == "business" || classType == "economiy") {
                this._travelClass = classType;
            }
            else
                this._travelClass = "economiy";
        },
        enumerable: true,
        configurable: true
    });
    //////////// functions
    FlightAttendant.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        document.write("Seniority:" + this.seniority + "&nbsp years.<br/>Country of origin:" + this.countryOfOrigin + ".<br/>Travel class:" + this.travelClass + "&nbspclass.<br/><br/>");
    };
    return FlightAttendant;
}(Person));
//# sourceMappingURL=flightAttendant.js.map