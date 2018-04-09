import { Pizza } from "./pizza.model";

export class PizzaInfo extends Pizza {

    public arr: Array<any> = new Array<any>();


    constructor() {
        super();
        for (let i = 0; i < 100; i++) {
            this.diameter = Math.round(Math.random() * (50 - 10) + 10);
            this.slices = Math.round(Math.random() * (8 - 3) + 3);
            this.toppings = Math.round(Math.random() * 4);
            this.price=this.diameter + (this.toppings * 5);

            this.arr.push({
                "diameter": this.diameter,
                "slices": this.slices,
                "toppings": this.toppings,
                "price": this.price
            })
        }

    }


    public getInfo(): Array<any> {

        return this.arr;
    }

}

