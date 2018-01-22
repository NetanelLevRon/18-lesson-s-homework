
class Steward extends Person {

    /////////// properties

    private _seniority: number;
    private _countryOfOrigin: string;
    private _groundJob: string;

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

    set groundJob(job: string) {
        this._groundJob = job;
    }

    get groundJob(): string {
        return this._groundJob;
    }

     //////////// functions

    public getInfo(): void {
        super.getInfo();
        document.write(`Seniority:${this.seniority}&nbsp years.<br/>Country of origin:${this.countryOfOrigin}.<br/>Ground job:${this.groundJob}.<br/><br/>`);
    }


}