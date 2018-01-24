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
var Student = (function (_super) {
    __extends(Student, _super);
    ///////////// constructor /////////////
    function Student(fullName, age, id, isMale) {
        return _super.call(this, fullName, age, id, isMale) || this;
    }
    Object.defineProperty(Student.prototype, "studyPlace", {
        get: function () {
            return this._studyPlace;
        },
        set: function (prop) {
            this._studyPlace = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "profession", {
        get: function () {
            return this._profession;
        },
        set: function (prop) {
            this._profession = prop;
        },
        enumerable: true,
        configurable: true
    });
    /////////////// func //////////
    Student.prototype.printInfo = function () {
        _super.prototype.printInfo.call(this);
        document.write("Study place:" + this.studyPlace + ".<br/>profession:" + this.profession + ".<br/>");
    };
    return Student;
}(Person));
//# sourceMappingURL=student.js.map