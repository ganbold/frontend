import { Image } from "./common"

export type Product = {
  id: string | number
  shop_id?: string | number
  name: string
  price: number
  sale_price?: number
  sku?: string
  slug?: string
  stock?: number
  images: Image[]
  description?: string
  short_description?: string
  options: ProductOption[]
  variants: ProductVariant[]
}

export type ProductVariant = Pick<
  Product,
  | "id"
  | "name"
  | "sku"
  | "slug"
  | "description"
  | "images"
  | "price"
  | "sale_price"
  | "options"
>

export type ProductOption = {
  id: string
  title: string
  values: string[]
}

export type Category = {
  id: string | number
  parent_id: string | number
  level: number
  code: string | number
  ordering: number
  name: string
  slug?: string
  images: Image[]
  description?: string
}

export type Collection = {
  id: string | number
  ordering: number
  name: string
  slug?: string
  images: Image[]
  description?: string
}
