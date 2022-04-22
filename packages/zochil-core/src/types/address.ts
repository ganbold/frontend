export type Address = {
  id: string | number
  user_id: string | number
  country_code: string
  country_name: string
  province_name: string
  province_code: string
  company_name?: string
  city: string
  district?: string
  sub_district?: string
  street?: string
  address_line_1: string
  address_line_2: string
  building_number?: string
  door_code?: string
  door_number?: string
  zipcode?: string
  postal_code?: string
  lat?: number
  lng?: number
}
