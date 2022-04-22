import { Image } from "./common"

export type PaymentMethod = {
  id: string | number
  name: string
  image: Image
}

export type Payment = {
  id: string | number
  status: PaymentStatus
  cart_id: string | number
  order_id: string | number
  provider: PaymentMethod
  amount: number
  invoiceno: string
  qrcode?: string
  deeplinks?: string[]
  error_message?: string
  created_at: Date
  paid_at?: Date
  settled_at?: Date
}

export type PaymentStatus = "pending" | "paid" | "error" | "verified_manually"
