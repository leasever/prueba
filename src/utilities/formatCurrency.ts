const CURRENCY_FORMATER = new  Intl.NumberFormat(undefined, {currency: "USD", style: "currency"})

export function fomatCurrency(number: number){
  return CURRENCY_FORMATER.format(number)
}