import { Cart } from './Cart'
import { InstallmentBuilder } from './Installment'
import { Product } from './Product'

export class Purchase {
  private readonly products: Product[] = []

  /**
   * @param {Cart} cart The cart to purchase from
   * @throws If cart's products is empty
   */
  constructor(cart: Cart) {
    if (!cart.products.length)
      throw new Error('Uma compra não pode ser feita com o carrinho vazio')

    this.products.push(...cart.products)
  }

  /**
   * @returns {InstallmentBuilder} Object that builds an Installment
   */
  installment(): InstallmentBuilder {
    const total = this.products.reduce((acc, { value }) => acc + value, 0)
    return new InstallmentBuilder(total)
  }

}