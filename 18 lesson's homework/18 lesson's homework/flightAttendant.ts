
class FlightAttendant extends Person {

    /////////// properties

    private _seniority: number;
    private _countryOfOrigin: string;
    private _travelClass: string;

    ///////////// set & get

    set countryOfOrigin(country: string) {
        this._countryOfOrigin = country;
    }

    get countryOfOrigin(): string {
        return this._countryOfOrigin;
    }

    set seniority(years: number) {
        this._seniority = years;
    }

    get seniority(): number {
        return this._seniority;
    }

    /**  travelClass. enter type of class- can be only: "first" or "business" or "economiy" if not one of those options, by default it will be "economiy class".*/

    set travelClass(classType: string) {
        if (classType == "first" || classType == "business" || classType == "economiy") {
            this._travelClass = classType;
        }
        else this._travelClass = "economiy";
    }

    get travelClass(): string {
        return this._travelClass;
    }

     //////////// functions

    public getInfo(): void {
        super.getInfo();
        document.write(`Seniority:${this.seniority}&nbsp years.<br/>Country of origin:${this.countryOfOrigin}.<br/>Travel class:${this.travelClass}&nbspclass.<br/><br/>`);
    }

}