
class Pilot extends Person {

    /////////// properties

    private _licensNumber: string;
    private _seniority: number;

    ///////////// set & get

    set licensNumber(num: string) {
        this._licensNumber = num;
    }

    get licensNumber(): string {
        return this._licensNumber;
    }

    set seniority(years: number) {
        this._seniority = years;
    }

    get seniority(): number {
        return this._seniority;
    }

     //////////// functions

    public getInfo(): void {
        super.getInfo();
        document.write(`Licens number:${this.licensNumber}.<br/>Seniority:${this.seniority}&nbsp years.<br/><br/>`);
    }

}