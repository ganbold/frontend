export type AccountInfo = {
  id: string | number
  is_verified: boolean
  first_name?: string
  last_name?: string
  full_name?: string
  email?: string
  phone?: string
  created_at: Date
}

export type User = AccountInfo

export type AdminUser = AccountInfo & {
  roles: string[]
}
