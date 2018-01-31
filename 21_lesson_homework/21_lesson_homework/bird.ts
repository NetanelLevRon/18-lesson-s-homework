class Bird implements IFly {

    private _birdKind: string;
    private _color: string;
    private _age: number;

    set birdKind(prop: string) {
        this._birdKind = prop;
    }

    get birdKind(): string {
        return this._birdKind;
    }

    set color(prop: string) {
        this._color = prop;
    }

    get color(): string {
        return this._color;
    }

    set age(prop: number) {

        this._age = (prop >= 0) ? prop : 0;
    }

    get age(): number {
        return this._age;
    }

    ///////////////// interface functions

    fly(speed: number): void {
        document.write(`The bird flew at ${speed}&nbsp km/h.<br/>`);
    }

    land(): boolean {
        return true;
    }

    /////////// ctor

    constructor(birdKind: string, color: string, age: number) {
        this.birdKind = birdKind;
        this.color = color;
        this.age = age;
    }
}