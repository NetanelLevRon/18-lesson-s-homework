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
var Employee = (function (_super) {
    __extends(Employee, _super);
    /////////////// constructor /////////////
    function Employee(fullName, age, id, isMale) {
        return _super.call(this, fullName, age, id, isMale) || this;
    }
    Object.defineProperty(Employee.prototype, "monthSalary", {
        get: function () {
            return this._monthSalary;
        },
        set: function (prop) {
            this._monthSalary = prop;
        },
        enumerable: true,
        configurable: true
    });
    //////////////////// func //////////////
    Employee.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("Month salary:" + this.monthSalary + "&nbsp Shekels.<br/>");
    };
    return Employee;
}(Person));
//# sourceMappingURL=employee.js.map