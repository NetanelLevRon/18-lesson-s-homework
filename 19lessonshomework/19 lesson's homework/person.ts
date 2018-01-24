class Person {

    private _fullName: string;
    private _age: number;
    private _identificationNumber: string;
    private _isMale: boolean;

    set fullName(prop: string) {
        this._fullName = prop;
    }

    get fullName(): string {
        return this._fullName;
    }

    set age(prop: number) {
        this._age = (prop >= 0 && prop<=120)?prop:0;
    }

    get age(): number {
        return this._age;
    }

    set identificationNumber(prop: string) {
        let tempIdStr: string = "1" + prop;  
        let checkIdNum: number = Number(tempIdStr);
        prop = (checkIdNum >= 1000000000 && checkIdNum < 10000000000) ? prop : "wrong ID";
        this._identificationNumber = prop;
    }

    get identificationNumber(): string {
        return this._identificationNumber;
    }

    set isMale(prop: boolean) {
        this._isMale = prop;
    }

    get isMale(): boolean {
        return this._isMale;
    }

    ///////////////// func //////////

    public printInfo(): void {
        document.write(`Full name:${this.fullName}.<br/>Age:${this.age}&nbsp years.<br/>ID:${this.identificationNumber}.<br/>isMale?:${this.isMale}.<br/>`);
    }

    ///////////////// constructor //////////

    constructor(fullName: string, age: number, id: string, isMale: boolean) {
        this.fullName = fullName;
        this.age = age;
        this.identificationNumber = id;
        this.isMale = isMale;
    }
}