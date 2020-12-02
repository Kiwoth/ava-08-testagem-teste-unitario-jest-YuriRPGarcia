export class Installment {
  months: number
  monthlyAmounts: number[]

  /**
   * Splits the total amount in the number of months
   * Rounds the monthly amount downward to its nearest integer
   * Places the rests in the last month
   * 
   * @param {number} total Total amount of purchase
   * @param {number} months Number of months
   * @throws if months or total are 0 or total / months < 1
   */
  constructor(total: number, months: number) {
    this.months = months

    if (!months || !total)
      throw new Error("O número de parcelas e o valor total devem ser maiores que 0")

    if (total / months < 1)
      throw new Error("O valor da parcela precisa ser maior que 0")

    const monthlyAmount = total / months

    this.monthlyAmounts = new Array(months)
      .fill(monthlyAmount)
      .map(Math.floor)

    this.monthlyAmounts[months - 1] +=
      this.monthlyAmounts.reduce((rest, roundedAmount) => rest + (monthlyAmount - roundedAmount), 0)
  }
}

export class InstallmentBuilder {

  private _months: number = 1
  private _total: number

  /**
   * @param {number} total Total amount of purchase
   */
  constructor(total: number) {
    this._total = total
  }

  /**
   * Sets the number of months of the Installment Builder
   * @param {number} m Number of months
   * @returns {InstallmentBuilder} The Installment Builder itself
   */
  months(m: number): this {
    this._months = m
    return this
  }

  /**
   * Resets the Installment Builder Objetct
   * @returns {InstallmentBuilder} The Installment Builder itself
   */
  reset(): this {
    this._months = 1
    this._total = 0
    return this
  }

  /**
   * Creates an Installemnt based on the Installemnt Builder
   * @returns {Installment} New Installment
   */
  hire(): Installment {
    const installment = new Installment(this._total, this._months)
    this.reset()
    return installment
  }
}