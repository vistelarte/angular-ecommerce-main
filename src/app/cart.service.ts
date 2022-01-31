import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    items: Product[] = [];

    constructor() {}

    /**
     * 
     * @param product 
     * @param quantity 
     * Add to cart item
     */
    addToCart(product: Product, quantity: number = 1) {
        const check_index = this.items.findIndex(
            (item) => item.id === product.id
        );
        if (check_index !== -1) {
            this.items[check_index].quantity++;
            // console.log('Quantity updated:', this.items);
        } else {
            this.items.push({ ...product, quantity });
            // console.log('The product has been added to cart:', this.items);
        }
    }

    /**
     * 
     * @param itemId 
     * increament the cart quantity
     */

    incQtyNumber(itemId: any){
        let findItem = this.items.find(item => item.id === itemId)
        if(findItem && findItem.quantity < 10){
            findItem.quantity += 1
        }
    }

    /**
     * 
     * @param itemId 
     * decreement the cart quantity
     */
    decQtyNumber(itemId: any){
        let findItem = this.items.find(item => item.id === itemId)
        if(findItem && findItem.quantity > 1){
            findItem.quantity -= 1
        }
    }

    /**
     * 
     * @returns get total
     */
    getTotal() {
        // console.log(this.products);
        const total = this.items.reduce((acc, el) => {
            acc += el.currentPrice * el.quantity;
            return acc;
        }, 0);

        return ((total * 100) / 100).toFixed(2);
    }

    /**
     * 
     * @returns get cart items
     */
    getItems() {
        return this.items;
    }

    /**
     * 
     * @param productID 
     * delete item from cart
     */
    deleteFromCart(productID: any) {
        const items = this.items.filter((item) => item.id === productID);
        const index = this.items.indexOf(items[0]);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }

    /**
     * 
     * @returns clear all cart items
     */
    clearCart() {
        this.items = [];
        return this.items;
    }
}