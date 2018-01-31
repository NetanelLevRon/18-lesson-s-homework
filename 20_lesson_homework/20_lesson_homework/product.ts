class Product {

    private _productName: string;
    private _price: number;
    private _expiryDate: FullTime;

    set productName(prop: string) {
            this._productName = prop;
    }

    get productName(): string {
        return this._productName;
    }

    set price(prop: number) {
        if (prop >= 0) {
            this._price = prop;
        }
    }

    get price(): number {
        return this._price;
    }

    set expiryDate(prop: FullTime) {
        this._expiryDate = prop;
    }

    get expiryDate(): FullTime {
        return this._expiryDate;
    }

    //////// func

    public toString() {
        return `Product name:&nbsp${this.productName}.<br/>Price:&nbsp${this.price}&nbspShekels.<br/>Expiry date:${this.expiryDate}.`;
    }

    ///////// ctor

    constructor(productName: string, price: number, expiryDate: FullTime) {
        this.productName = productName;
        this.price = price;
        this.expiryDate = expiryDate;
    }
}