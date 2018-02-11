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
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    //////////////// constructor /////////////
    function Teacher(fullName, age, id, isMale) {
        return _super.call(this, fullName, age, id, isMale) || this;
    }
    Object.defineProperty(Teacher.prototype, "teachingProfession", {
        get: function () {
            return this._teachingProfession;
        },
        set: function (prop) {
            this._teachingProfession = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "teachingSeniority", {
        get: function () {
            return this._teachingSeniority;
        },
        set: function (prop) {
            this._teachingSeniority = prop;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////////// func /////////////
    Teacher.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("Teaching profession:" + this.teachingProfession + ".<br/>Teaching seniority:" + this.teachingSeniority + "&nbsp years.<br/>");
    };
    return Teacher;
}(Person));
//# sourceMappingURL=teacher.js.map