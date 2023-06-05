import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly originName: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly time: string,
        readonly price: number,
    ) {}

    getSum(): number {
        return this.price;
    }
}