export type BusinessType = {
  id: number | string
  name: string
}
export type Business = {
  id: number | string
  name: string
  logo: string
  description: string
  phone: string
  email: string
  address: string
  created_at: Date
  expire_at: string
  is_subscribed: boolean
  business_type: BusinessType
  lat?: string | number
  lng?: string | number
}

export type MerchantStatus =
  | "enabled"
  | "disabled"
  | "archived"
  | "subscribed"
  | "expired"

export type Merchant = Business & {
  status: MerchantStatus
}
