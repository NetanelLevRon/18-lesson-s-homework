class Student extends Person {

    private _studyPlace: string;
    private _profession: string;

    set studyPlace(prop: string) {
        this._studyPlace = prop;
    }

    get studyPlace(): string {
        return this._studyPlace;
    }

    set profession(prop: string) {
        this._profession = prop;
    }

    get profession(): string {
        return this._profession;
    }


    /////////////// func //////////

    public printInfo(): void {
        super.printInfo();
        document.write(`Study place:${this.studyPlace}.<br/>profession:${this.profession}.<br/>`);
    }

    ///////////// constructor /////////////

    constructor(fullName: string, age: number, id: string, isMale: boolean) {
        super(fullName, age, id, isMale);
    }
}