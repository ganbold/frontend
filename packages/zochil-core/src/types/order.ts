import { Cart } from "./cart"
import { User } from "./user"
import { Address } from "./address"
import { PaymentMethod, PaymentStatus } from "./payment"

export type Order = {
  id: string | number
  delivery_price?: number
  coupon_code?: string
  coupon_rate?: string
  payment_id?: string | number
  payment_status: PaymentStatus
  payment_method: PaymentMethod
  fulfillment_status: FulfillmentStatus
} & Omit<Cart, "id" | "user_id" | "created_at"> &
  Omit<User, "id" | "is_verified" | "created_at"> &
  Omit<Address, "id" | "user_id" | "created_at">

export type FulfillmentStatus = "pending" | "preparing" | "error"
