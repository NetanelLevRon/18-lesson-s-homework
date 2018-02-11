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
var Steward = (function (_super) {
    __extends(Steward, _super);
    function Steward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Steward.prototype, "countryOfOrigin", {
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
    Object.defineProperty(Steward.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (years) {
            this._seniority = years;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Steward.prototype, "groundJob", {
        get: function () {
            return this._groundJob;
        },
        set: function (job) {
            this._groundJob = job;
        },
        enumerable: true,
        configurable: true
    });
    //////////// functions
    Steward.prototype.getInfo = function () {
        _super.prototype.getInfo.call(this);
        document.write("Seniority:" + this.seniority + "&nbsp years.<br/>Country of origin:" + this.countryOfOrigin + ".<br/>Ground job:" + this.groundJob + ".<br/><br/>");
    };
    return Steward;
}(Person));
//# sourceMappingURL=steward.js.map