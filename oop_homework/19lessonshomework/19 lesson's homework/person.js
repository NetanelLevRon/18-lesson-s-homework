var Person = (function () {
    ///////////////// constructor //////////
    function Person(fullName, age, id, isMale) {
        this.fullName = fullName;
        this.age = age;
        this.identificationNumber = id;
        this.isMale = isMale;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (prop) {
            this._fullName = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (prop) {
            this._age = (prop >= 0 && prop <= 120) ? prop : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "identificationNumber", {
        get: function () {
            return this._identificationNumber;
        },
        set: function (prop) {
            var tempIdStr = "1" + prop;
            var checkIdNum = Number(tempIdStr);
            prop = (checkIdNum >= 1000000000 && checkIdNum < 10000000000) ? prop : "wrong ID";
            this._identificationNumber = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "isMale", {
        get: function () {
            return this._isMale;
        },
        set: function (prop) {
            this._isMale = prop;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////// func //////////
    Person.prototype.printInfo = function () {
        document.write("Full name:" + this.fullName + ".<br/>Age:" + this.age + "&nbsp years.<br/>ID:" + this.identificationNumber + ".<br/>isMale?:" + this.isMale + ".<br/>");
    };
    return Person;
}());
//# sourceMappingURL=person.js.map