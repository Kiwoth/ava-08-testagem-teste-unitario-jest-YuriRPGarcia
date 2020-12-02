import { Product } from "./Product";
import { Purchase } from "./Purchase";

export class Cart {
  readonly products: Product[] = []

  /**
   * Add 1 or n {Product} to {Cart}
   * @param {Product} prod Required Product
   * @param {...Product} prods Optional Products
   */
  addProduct(prod: Product, ...prods: Product[]): void {
    this.products.push(...[prod].concat(prods))
  }

  /**
   * Removes product if exists
   * @param prod {Product} to be removed from {Cart}
   */
  removeProduct(prod: Product): void {
    const index = this.products.indexOf(prod)
    if (this.products[index]) {
      this.products.splice(index, 0)
    }
  }

  /**
   * Creates a Purchase
   * @returns {Purchase} New Purchase
   */
  purchase(): Purchase {
    return new Purchase(this)
  }

}