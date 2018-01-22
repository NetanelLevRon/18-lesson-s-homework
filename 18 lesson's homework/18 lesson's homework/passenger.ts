
class Passenger extends Person {

    /////////// properties

    private _passportNumber: string;

    ///////////// set & get

    set passportNumber(num: string) {
        this._passportNumber = num;
    }

    get passportNumber(): string {
        return this._passportNumber;
    }

    //////////// functions

    public getInfo(): void {
        super.getInfo();
        document.write(`Passport number:${this.passportNumber}.<br/><br/>`);
    }
}