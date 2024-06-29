export interface Movie {
  "@meta": Meta
  "@type": string
  paginationKey: string
  results: Result[]
  totalMatches: number
}

export interface Meta {
  operation: string
  requestId: string
  serviceTimeMs: number
}

export interface Result {
  id: string
  image?: Image
  title: string
  titleType: string
  year: number
  episode?: number
  season?: number
}

export interface Image {
  height: number
  id: string
  url: string
  width: number
}
