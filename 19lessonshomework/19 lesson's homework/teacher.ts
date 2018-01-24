class Teacher extends Person{

    private _teachingProfession: string;
    private _teachingSeniority: string;

    set teachingProfession(prop: string) {
        this._teachingProfession = prop;
    }

    get teachingProfession(): string {
        return this._teachingProfession;
    }

    set teachingSeniority(prop: string) {
        this._teachingSeniority = prop;
    }

    get teachingSeniority(): string {
        return this._teachingSeniority;
    }

    ///////////////////// func /////////////

    public printInfo(): void {
        super.printInfo();
        document.write(`Teaching profession:${this.teachingProfession}.<br/>Teaching seniority:${this.teachingSeniority}&nbsp years.<br/>`);
    }

    //////////////// constructor /////////////

    constructor(fullName: string, age: number, id: string, isMale: boolean) {
        super(fullName, age, id, isMale);
    }
}