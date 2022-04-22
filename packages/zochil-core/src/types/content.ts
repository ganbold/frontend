import { Image } from "./common"

export type Post = {
  id: number | string
  author_id?: number | string
  status: ContentStatus
  thumb: Image
  images: Image[]
  title: string
  body: string
  summary: string
  created_at: Date
}

export type Page = Omit<Post, "status" | "author_id"> & {
  code: string
  thumb: Image
  images: Image[]
  title: string
  url: string
  position: string
  description: string
  created_at: Date
}

export type Banner = {
  id: number | string
}

export type ContentStatus = "draft" | "published" | "scheduled"
