class BasicDate {
    private _day: number;
    private _year: number;
    private _month: number;

    set day(prop: number) {
        if (prop <= 31 && prop >= 1) {
            this._day = prop;
        }
    }

    get day(): number {
        return this._day;
    }

    set year(prop: number) {
        if (prop <= 2050 && prop >= 2020) {
            this._year = prop;
        }
    }

    get year(): number {
        return this._year;
    }


    set month(prop: number) {
        if (prop <= 12 && prop >= 1) {
            this._month = prop;
        }
    }

    get month(): number {
        return this._month;
    }

    //////// func

    public toString() {
        return `&nbsp${this.day}/${this.month}/${this.year}.`;
        
    }

    /////////// ctor

    constructor(day: number, year: number, month: number) {
        this.day = day;
        this.year = year;
        this.month = month;
    }

}