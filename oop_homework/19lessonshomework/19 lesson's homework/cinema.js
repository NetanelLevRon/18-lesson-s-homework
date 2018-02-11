var Cinema = (function () {
    ///////////////// constructor ////////
    function Cinema() {
        this._studentReductionPercent = Math.round(Math.random() * (20 - 10) + 10);
        this._teacherReductionPercent = Math.round(Math.random() * (10 - 5) + 5);
    }
    Object.defineProperty(Cinema.prototype, "movieName", {
        get: function () {
            return this._movieName;
        },
        set: function (prop) {
            this._movieName = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "moviePrice", {
        get: function () {
            return this._moviePrice;
        },
        set: function (prop) {
            this._moviePrice = (prop >= 30 && prop <= 200) ? prop : 30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "studentReductionPercent", {
        get: function () {
            return this._studentReductionPercent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "teacherReductionPercent", {
        get: function () {
            return this._teacherReductionPercent;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=cinema.js.map