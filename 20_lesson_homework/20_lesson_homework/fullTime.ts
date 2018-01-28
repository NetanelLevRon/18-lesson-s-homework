class FullTime extends BasicDate {

    private _hour: number;
    private _minutes: number;
    private _seconds: number;

    set hour(prop: number) {
        if (prop <= 24 && prop >= 0) {
            this._hour = prop;
        }
    }

    get hour(): number {
        return this._hour;
    }

    set minutes(prop: number) {
        if (prop <= 60 && prop >= 0) {
            this._minutes = prop;
        }
    }

    get minutes(): number {
        return this._minutes;
    }


    set seconds(prop: number) {
        if (prop <= 60 && prop >= 0) {
            this._seconds = prop;
        }
    }

    get seconds(): number {
        return this._seconds;
    }

    //////// func

    public toString() {
        return super.toString() + `<br/>Time:&nbsp${this.hour}:${this.minutes}:${this.seconds}.`;     
    }

    ///////// ctor

    constructor(day: number, year: number, month: number, hour: number, minutes: number, seconds: number) {
        super(day, year, month);
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }

}