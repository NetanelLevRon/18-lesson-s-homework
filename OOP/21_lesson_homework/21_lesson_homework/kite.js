var Kite = (function () {
    /////////// ctor
    function Kite(color, price) {
        this.color = color;
        this.price = price;
    }
    Object.defineProperty(Kite.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (prop) {
            this._color = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kite.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (prop) {
            this._price = (prop >= 0) ? prop : 0;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////// interface functions
    Kite.prototype.fly = function (speed) {
        document.write("The kite flew at " + speed + "&nbsp km/h.<br/>");
    };
    Kite.prototype.land = function () {
        return false;
    };
    return Kite;
}());
//# sourceMappingURL=kite.js.map