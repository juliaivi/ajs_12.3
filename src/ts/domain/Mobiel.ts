import Buyable from "./Buyable";
import Countable from "./Countable";

export default class Mobiel implements Buyable, Countable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly company: string,
        readonly price: number,
        readonly quantity: number,
    ) {}

    getSum(): number {
        return this.price * this.quantity;
    }
}