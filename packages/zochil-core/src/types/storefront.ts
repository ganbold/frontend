import { Image } from "./common"

export type StorefrontContext = {
  id: string | number
  domain: string
  status: "enabled" | "disabled"
  token: string
  token_expire_at: string
  name: string
  logo?: Image
  website_title?: string
  additional_scripts?: string
  meta_tags: StorefrontMetaTag[]
}

export type StorefrontMetaTag = {
  name: string
  content: string
}
