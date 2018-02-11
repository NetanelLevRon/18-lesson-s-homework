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
var Pilot = (function (_super) {
    __extends(Pilot, _super);
    function Pilot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Pilot.prototype, "licensNumber", {
        get: function () {
            return this._licensNumber;
        },
        set: function (num) {
            this._licensNumber = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pilot.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (years) {
            this._seniority = years;
        },
        enumerable: true,
        configurable: true
    });
    Pilot.prototype.getInfo = function () {
        _super.prototype.getInfo;
        document.write("Licens number:" + this.licensNumber + ".<br/>Seniority:" + this.seniority + ".<br/>");
    };
    return Pilot;
}(Person));
//# sourceMappingURL=pilot.person.js.map