class Employee extends Person {

    private _monthSalary: number;

    set monthSalary(prop: number) {
        this._monthSalary = prop;
    }

    get monthSalary(): number {
        return this._monthSalary;
    }

    //////////////////// func //////////////

    public printInfo(): void {
        super.printInfo();
        document.write(`Month salary:${this.monthSalary}&nbsp Shekels.<br/>`);
    }

    /////////////// constructor /////////////

    constructor(fullName: string, age: number, id: string, isMale: boolean) {
        super(fullName, age, id, isMale);
    }

}