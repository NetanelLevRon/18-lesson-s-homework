class Cinema {

    private _movieName: string;
    private _moviePrice: number;
    private readonly _studentReductionPercent: number;
    private readonly _teacherReductionPercent: number;

    set movieName(prop: string) {
        this._movieName = prop;
    }

    get movieName(): string {
        return this._movieName;
    }


    set moviePrice(prop: number) {
        this._moviePrice = (prop >= 30 && prop <= 200) ? prop:30;
    }

    get moviePrice(): number {
        return this._moviePrice;
    }

    get studentReductionPercent(): number {
        return this._studentReductionPercent;
    }

    get teacherReductionPercent(): number {
        return this._teacherReductionPercent;
    }

    ///////////////// constructor ////////

    constructor() {
        this._studentReductionPercent = Math.round(Math.random() * (20 - 10) + 10);
        this._teacherReductionPercent = Math.round(Math.random() * (10 - 5) + 5);
    }

}