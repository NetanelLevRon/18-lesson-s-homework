
class Person {

    /////////// properties

    private _firstName: string;
    private _lastName: string;

    ///////////// set & get

    set firstName(name: string) {
        this._firstName = name;
    }

    get firstName(): string {
        return this._firstName;
    }

    set lastName(name: string) {
        this._lastName = name;
    }

    get lastName(): string {
        return this._lastName;
    }

     //////////// functions

    public getInfo(): void {

        document.write(`First name:${this.firstName}.<br/>Last name:${this.lastName}.<br/>`);
    }
}