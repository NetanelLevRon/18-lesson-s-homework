class Kite implements IFly {

    private _color: string;
    private _price: number;

    set color(prop: string) {
        this._color = prop;
    }

    get color(): string {
        return this._color;
    }

    set price(prop: number) {
        
        this._price = (prop>=0)?prop:0;
    }

    get price(): number {
        return this._price;
    }

    ///////////////// interface functions

    public fly(speed: number): void {
        document.write(`The kite flew at ${speed}&nbsp km/h.<br/>`);
    }

    public land(): boolean {
        return false;
    }

    /////////// ctor

    constructor(color: string, price: number) {
        this.color = color;
        this.price = price;
    }
}