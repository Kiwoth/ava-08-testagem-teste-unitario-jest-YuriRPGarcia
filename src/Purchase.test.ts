import { Cart } from "./Purchase/Cart"
import { Installment } from "./Purchase/Installment"
import { Product } from "./Purchase/Product"

let cart = new Cart()

beforeEach(() => {
  cart = new Cart()
})

test('Não consegue comprar sem nenhum produto no carrinho', () => {
  expect(() => cart.purchase()).toThrow()
})

test('Não consegue parcelar em menos de 1 vez', () => {
  const ps5: Product = new Product('PS5', 4700)

  cart.addProduct(ps5)
  expect(() =>
    cart
      .purchase()
      .installment()
      .months(0)
      .hire()
  ).toThrow()
})

const restoEsperado: number = (421.605 - 421) * 12 + 421

test(`Última parcela tem o resto ${restoEsperado.toFixed(2)}`, () => {
  const ps5: Product = new Product('PS5', 4700)
  const teclado: Product = new Product('Keychron K2', 359.26)

  cart.addProduct(ps5, teclado)

  const installment: Installment =
    cart.purchase()
      .installment()
      .months(12)
      .hire()

  expect(installment.monthlyAmounts[installment.monthlyAmounts.length - 1])
    .toBe(restoEsperado)
})

test(`Parcelado em uma vez tem o mesmo valor do produto`, () => {
  const ps5: Product = new Product('PS5', 4700)

  cart.addProduct(ps5)

  const installment: Installment =
    cart.purchase()
      .installment()
      .months(1)
      .hire()

  expect(installment.monthlyAmounts[0])
    .toBe(ps5.value)
})