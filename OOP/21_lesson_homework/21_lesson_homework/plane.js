var Plane = (function () {
    /////////// ctor
    function Plane(pilotName, airlineName, destination) {
        this.pilotName = pilotName;
        this.airlineName = airlineName;
        this.destination = destination;
    }
    Object.defineProperty(Plane.prototype, "pilotName", {
        get: function () {
            return this._pilotName;
        },
        set: function (prop) {
            this._pilotName = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "airlineName", {
        get: function () {
            return this._airlineName;
        },
        set: function (prop) {
            this._airlineName = prop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plane.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        set: function (prop) {
            this._destination = prop;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////// interface functions
    Plane.prototype.fly = function (speed) {
        document.write("The plane flew at " + speed + "&nbsp km/h.<br/>");
    };
    Plane.prototype.land = function () {
        return true;
    };
    return Plane;
}());
//# sourceMappingURL=plane.js.map