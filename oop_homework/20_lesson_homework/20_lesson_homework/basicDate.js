var BasicDate = (function () {
    /////////// ctor
    function BasicDate(day, year, month) {
        this.day = day;
        this.year = year;
        this.month = month;
    }
    Object.defineProperty(BasicDate.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (prop) {
            if (prop <= 31 && prop >= 1) {
                this._day = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (prop) {
            if (prop <= 2050 && prop >= 2020) {
                this._year = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicDate.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (prop) {
            if (prop <= 12 && prop >= 1) {
                this._month = prop;
            }
        },
        enumerable: true,
        configurable: true
    });
    //////// func
    BasicDate.prototype.toString = function () {
        return "&nbsp" + this.day + "/" + this.month + "/" + this.year + ".";
    };
    return BasicDate;
}());
//# sourceMappingURL=basicDate.js.map