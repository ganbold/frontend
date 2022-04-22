import { Currency } from "./common"

export type Cart = {
  id: string
  user_id?: string
  currency: Currency
  line_items: CartLineItem[]
  subtotal_price: number
  total_price: number
  discounts?: number[]
  created_at: string
}

export type CartLineItem = {
  id: string | number
  shop_id?: string | number
  product_id: string | number
  variant_id: string | number
  name: string
  price: string | number
  sale_price: string | number
  quantity: number | string
  options?: CartLineItemOption[]
}

export type CartLineItemOption = {
  id?: string | number
  title: string
  value: string
}
