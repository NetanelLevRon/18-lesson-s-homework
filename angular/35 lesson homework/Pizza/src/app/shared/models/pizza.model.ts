export class Pizza {
    private _diameter: number;
    private _slices: number;
    private _toppings: number;
    price: number = this.diameter + (this.toppings * 5);

    set diameter(dia: number) {
        if (dia >= 10 && dia <= 50) {
            this._diameter = dia;
        }
    }
    get diameter(): number {
        return this._diameter;
    }

    set slices(sli: number) {
        if (sli >= 3 && sli <= 8) {
            this._slices = sli;
        }
    }
    get slices(): number {
        return this._slices;
    }

    set toppings(top: number) {
        if (top >= 0 && top <= 4) {
            this._toppings = top;
        }
    }
    get toppings(): number {
        return this._toppings;
    }


}


