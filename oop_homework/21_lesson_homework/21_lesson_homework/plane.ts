class Plane implements IFly {

    private _pilotName: string;
    private _airlineName: string;
    private _destination: string;

    set pilotName(prop: string) {
        this._pilotName = prop;
    }

    get pilotName(): string {
        return this._pilotName;
    }

    set airlineName(prop: string) {
        this._airlineName = prop;
    }

    get airlineName(): string {
        return this._airlineName;
    }

    set destination(prop: string) {
        this._destination = prop;
    }

    get destination(): string {
        return this._destination;
    }

    ///////////////// interface functions

    fly(speed: number): void {
        document.write(`The plane flew at ${speed}&nbsp km/h.<br/>`);
    }

    land(): boolean {
        return true;
    }

    /////////// ctor

    constructor(pilotName: string, airlineName: string, destination: string) {
        this.pilotName = pilotName;
        this.airlineName = airlineName;
        this.destination = destination;
    }
}