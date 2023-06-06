import { ucs2 } from 'punycode';
import Buyable from '../domain/Buyable';
import Countable from '../domain/Countable';

export function instanceOfCountable(object: any): object is Countable {
    return 'quantity' in object;
}

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        let elementItem = this._items.findIndex((el) => el.id === item.id);
        let findedItem = this._items[elementItem];
    
        if(elementItem !== -1 && instanceOfCountable(findedItem)) {
            if(!instanceOfCountable(item) ) {
                throw new Error ("Unexpected item type! Item should be countable.");
            }
            findedItem.quantity += item.quantity
            return;
        }

        if(elementItem !== -1 && !instanceOfCountable(item)) {
            return;
        }

        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalCost(): number {
        return  this._items.reduce((sum, item) => sum + item.getSum(), 0);
    }

    discountPrice (discount: number): number {
        return this.totalCost() * (1 - discount);
    }

    deleteItem(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        let findedItem = this._items[index]
        if (instanceOfCountable(findedItem)) {
            if (findedItem.quantity > 1) {
               findedItem.quantity -= 1; 
               return;
            }
            this._items.splice(index, 1);
            return;
        } 

        this._items.splice(index, 1);
    }
}