var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        ///////////// set & get
        set: function (name) {
            this._firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (name) {
            this._lastName = name;
        },
        enumerable: true,
        configurable: true
    });
    //////////// functions
    Person.prototype.getInfo = function () {
        document.write("First name:" + this.firstName + ".<br/>Last name:" + this.lastName + ".<br/>");
    };
    return Person;
}());
//# sourceMappingURL=person.js.map