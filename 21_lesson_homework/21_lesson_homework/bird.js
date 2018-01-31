var Bird = (function () {
    /////////// ctor
    function Bird(birdKind, color, age) {
        this.birdKind = birdKind;
        this.color = color;
        this.age = age;
    }
    Object.defineProperty(Bird.prototype, "birdKind", {
        get: function () {
            return this._birdKind;
        },
        set: function (prop) {
            this._birdKind = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (prop) {
            this._color = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bird.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (prop) {
            this._age = (prop >= 0) ? prop : 0;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////// interface functions
    Bird.prototype.fly = function (speed) {
        document.write("The bird flew at " + speed + "&nbsp km/h.<br/>");
    };
    Bird.prototype.land = function () {
        return true;
    };
    return Bird;
}());
//# sourceMappingURL=bird.js.map